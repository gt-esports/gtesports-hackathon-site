import { useEffect, useState } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "survey-core/survey-core.min.css";
import "../../index.css";
import { surveyJson } from "../../data/appQuestions";
import { supabase } from "../../utils/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function HackathonApplication() {
    const navigate = useNavigate();
    const [model] = useState(() => new Model(surveyJson));
    const [loading, setLoading] = useState(true);
    const [hasApplied, setHasApplied] = useState(false);

    // --- Hot reload fix ---
    const [modelKey, setModelKey] = useState("prod");

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            setModelKey(Date.now().toString());
        }
    }, []);

    useEffect(() => {
        const checkUserAndStatus = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();

                if (!session) {
                    // If not logged in, redirect to login
                    navigate("/login");
                    return;
                }

                // Check if user has already applied
                const { data: existingApp } = await supabase
                    .from("applications")
                    .select("id")
                    .eq("user_id", session.user.id)
                    .single();

                if (existingApp) {
                    setHasApplied(true);
                    // Optional: set model to display mode or readonly
                    model.mode = "display";
                }

            } catch (err) {
                console.error("Failed to check application status", err);
            } finally {
                setLoading(false);
            }
        };

        checkUserAndStatus();
    }, [model, navigate]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleComplete = async (sender: any) => {
            const data = sender.data;
            try {
                const { data: { session } } = await supabase.auth.getSession();
                if (!session) {
                    alert("Session expired. Please log in again.");
                    navigate("/login");
                    return;
                }

                const { error } = await supabase
                    .from("applications")
                    .insert({
                        user_id: session.user.id,
                        answers: data,
                        status: "pending"
                    });

                if (error) {
                    // Check for duplicate key error (code 23505 in Postgres)
                    if (error.code === '23505') {
                        alert("You have already submitted an application.");
                        setHasApplied(true);
                    } else {
                        throw error;
                    }
                } else {
                    console.log("Application submitted:", data);
                    alert("Application submitted successfully!");
                    setHasApplied(true);
                    navigate("/dashboard");
                }

            } catch (err) {
                console.error("Failed to submit application:", err);
                alert("Failed to submit application. Please try again.");
            }
        };

        model.onComplete.add(handleComplete);
        return () => {
            model.onComplete.remove(handleComplete);
        };
    }, [model, navigate]);

    if (loading) {
        return <div className="text-center text-valley-brown font-pixel p-10">Loading application status...</div>;
    }

    if (hasApplied) {
        return (
            <div className="max-w-3xl mx-auto my-10 p-8 rounded-3xl shadow-2xl bg-valley-cream border-4 border-valley-green text-center">
                <h2 className="text-3xl font-pixel text-valley-green mb-4">Application Received!</h2>
                <p className="font-pixel text-valley-brown mb-6">
                    Thank you for applying to TechHack Valley and being a part of our 2026 application cycle!
                    Check your dashboard for updates.
                </p>
                <button
                    onClick={() => navigate("/dashboard")}
                    className="px-6 py-3 bg-valley-green text-valley-cream font-pixel rounded-lg hover:bg-valley-dark-green transition-colors"
                >
                    Go to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto my-10 p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-white to-gray-50">
            <Survey model={model} key={modelKey} />
        </div>
    );
}
