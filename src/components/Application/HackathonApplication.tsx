import { useEffect, useState } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "survey-core/survey-core.min.css";
import "../../index.css";
import { surveyJson } from "../../data/appQuestions";
import { supabase } from "../../utils/supabaseClient";
import { useNavigate, useSearchParams } from "react-router-dom";

interface SurveyData {
    email: string;
    full_name: string;
    [key: string]: unknown;
}

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

    const [searchParams] = useSearchParams();
    const applicationId = searchParams.get("id");

    useEffect(() => {
        const checkUserAndStatus = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();

                if (!session) {
                    // If not logged in, redirect to login
                    navigate("/login");
                    return;
                }

                let existingApp = null;
                let fetchError = null;

                if (applicationId) {
                    const { data, error } = await supabase
                        .from("applications")
                        .select("id, answers")
                        .eq("user_id", session.user.id)
                        .eq("id", applicationId)
                        .single();
                    existingApp = data;
                    fetchError = error;
                } else {
                    const { data, error } = await supabase
                        .from("applications")
                        .select("id, answers")
                        .eq("user_id", session.user.id)
                        .order('created_at', { ascending: false })
                        .limit(1);

                    if (data && data.length > 0) {
                        existingApp = data[0];
                    }
                    fetchError = error;
                }

                // If looking for specific ID and error (not found), might want to handle that
                if (applicationId && fetchError) {
                    console.error("Application not found", fetchError);
                    setLoading(false);
                    return;
                }

                if (existingApp) {
                    setHasApplied(true);
                    model.mode = "display";
                    model.data = existingApp.answers;
                }

            } catch (err) {
                console.error("Failed to check application status", err);
            } finally {
                setLoading(false);
            }
        };

        checkUserAndStatus();
    }, [model, navigate, applicationId]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleComplete = async (sender: any) => {
            const data = sender.data as SurveyData;
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
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        answers: data as any,
                        status: "pending"
                    });

                if (error) {
                    // Check for duplicate key error (code 23505 in Postgres)
                    if (error.code === '23505') {
                        alert("You have already submitted an application.");
                        setHasApplied(true);
                        // Reload to fetch stats
                        window.location.reload();
                    } else {
                        throw error;
                    }
                } else {
                    console.log("Application submitted:", data);

                    // Send confirmation email
                    try {
                        const { error: fnError } = await supabase.functions.invoke('send-confirmation-email', {
                            body: {
                                email: data.email,
                                name: data.full_name,
                            },
                        });
                        if (fnError) {
                            console.error("Failed to trigger email confirmation:", fnError);
                        }
                    } catch (emailErr) {
                        console.error("Exception triggering email confirmation:", emailErr);
                    }

                    alert("Application submitted successfully!");
                    setHasApplied(true);
                    model.mode = "display";
                    navigate("/dashboard");
                }

            } catch (err) {
                console.error("Failed to submit application:", err);
                alert("Failed to submit application. Please try again.");
            }
        };

        model.onComplete.add(handleComplete);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        model.onUploadFiles.add(async (_: any, options: any) => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session?.user) {
                options.callback("error", "No active session");
                return;
            }

            const newFiles = [];
            for (const file of options.files) {
                try {
                    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
                    const fileName = `${session.user.id}/${Date.now()}_${sanitizedName}`;

                    const { data, error } = await supabase.storage
                        .from('resumes')
                        .upload(fileName, file, {
                            upsert: true
                        });

                    if (error) {
                        console.error("Upload error:", error);
                        options.callback("error", error.message);
                        return;
                    }

                    if (data) {
                        newFiles.push({
                            file: file,
                            content: data.path // Store the storage path
                        });
                    }
                } catch (e) {
                    console.error("Exception during upload:", e);
                    options.callback("error", "Upload failed");
                    return;
                }
            }

            options.callback("success", newFiles);
        });

        return () => {
            model.onComplete.remove(handleComplete);
            model.onUploadFiles.clear();
        };
    }, [model, navigate]);

    if (loading) {
        return <div className="text-center text-valley-brown font-pixel p-10">Loading application status...</div>;
    }

    return (
        <div className="max-w-3xl mx-auto my-10 p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-white to-gray-50">
            {hasApplied && (
                <div className="mb-6 bg-valley-green/10 border border-valley-green text-valley-dark-green px-4 py-3 rounded relative text-center font-pixel">
                    <strong className="font-bold">Application Submitted!</strong>
                    <span className="block sm:inline"> You are viewing your submitted application.</span>
                </div>
            )}
            <Survey model={model} key={modelKey} />
        </div>
    );


}
