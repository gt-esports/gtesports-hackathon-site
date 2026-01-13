import type { Application, Profile } from "../../types/database.types";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

interface AdminApplicationViewProps {
    application: Application;
    onClose: () => void;
}

export default function AdminApplicationView({ application, onClose }: AdminApplicationViewProps) {
    const [applicantProfile, setApplicantProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadingStatus, setLoadingStatus] = useState(false);

    const updateStatus = async (newStatus: Application['status']) => {
        if (!confirm(`Are you sure you want to change the status to ${newStatus}?`)) return;

        setLoadingStatus(true);
        const { error } = await supabase
            .from('applications')
            .update({ status: newStatus })
            .eq('id', application.id);

        if (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status");
        } else {
            // Optimistic update or reload? 
            // Ideally we callback to parent to refresh, but for now we can rely on parent re-fetching if desired, 
            // OR we can just mutate the local prop object via specific pattern, but props are read-only.
            // The best way is to call an onUpdate callback if we had one.
            // Since we don't, we'll just modify the local display if we want, OR we assume the parent will refresh.
            // Actually, the parent (AdminDashboard) passes the 'application' object. 
            // If we want the UI inside THIS component to update immediately, we might need local state for status 
            // initialized from props, or we accept that it won't update until closed/reopened.
            // BETTER: Notify parent. Let's assume parent might refresh or we force a reload.
            // For this iteration, let's just alert success and close, OR ideally we should have an `onUpdate` prop.
            // I'll stick to a simple alert and close for now, or just reload the window which is crude but works.
            // WAIT, I can just mutate the application object passed in? No, that's bad React.
            // Let's reload page for now to be safe, OR just `onClose()`.

            // Actually, I'll update the plan to add onUpdate prop in a future step if needed. 
            // For now, let's just reload the page to ensure fresh data.
            window.location.reload();
        }
        setLoadingStatus(false);
    };

    useEffect(() => {
        const fetchProfile = async () => {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', application.user_id)
                .single();

            if (error) {
                console.error("Error fetching profile:", error);
            } else {
                setApplicantProfile(data);
            }
            setLoading(false);
        };

        fetchProfile();
    }, [application.user_id]);

    if (loading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                <div className="bg-valley-cream border-4 border-valley-brown p-8 rounded-lg">
                    <p className="text-valley-brown font-pixel">Loading profile...</p>
                </div>
            </div>
        );
    }

    // Parse answers safely
    let answers: Record<string, unknown> = {};
    if (application.answers && typeof application.answers === 'object') {
        answers = application.answers as Record<string, unknown>;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="bg-valley-cream border-4 border-valley-brown rounded-lg w-full max-w-4xl my-4 md:my-8 relative flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-4 md:p-6 border-b-4 border-valley-brown bg-valley-green-light sticky top-0 z-10 flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                        <h2 className="text-xl md:text-2xl font-pixel text-valley-brown mb-2">
                            {applicantProfile?.full_name || "Unknown Applicant"}
                        </h2>
                        <div className="flex flex-wrap gap-2 md:gap-4 font-pixel text-xs md:text-sm text-valley-brown/80">
                            <p>{applicantProfile?.email}</p>
                            <p className="hidden md:block">•</p>
                            <p className="w-full md:w-auto">{applicantProfile?.college || "No College Listed"}</p>
                        </div>
                        <div className="mt-2">
                            <span className={`px-2 py-1 rounded text-xs font-pixel uppercase ${application.status === 'accepted' ? 'bg-green-500 text-white' :
                                application.status === 'rejected' ? 'bg-red-500 text-white' :
                                    application.status === 'waitlisted' ? 'bg-yellow-500 text-white' :
                                        'bg-gray-400 text-white'
                                }`}>
                                {application.status}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 md:relative md:top-auto md:right-auto text-valley-brown hover:text-red-500 font-pixel text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 overflow-y-auto font-sans text-valley-brown space-y-6">
                    <section>
                        <h3 className="text-lg md:text-xl font-pixel text-valley-green mb-4 border-b-2 border-valley-green/20 pb-2">
                            Application Responses
                        </h3>

                        <div className="grid gap-4 md:gap-6">
                            {Object.entries(answers).map(([key, value]) => (
                                <div key={key} className="bg-white/50 p-3 md:p-4 rounded border-2 border-valley-brown/10">
                                    <p className="font-bold mb-2 capitalize text-valley-green-dark text-sm md:text-base">
                                        {key.replace(/_/g, ' ')}
                                    </p>
                                    <div className="whitespace-pre-wrap text-gray-800 text-sm md:text-base">
                                        {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
                                    </div>
                                </div>
                            ))}
                            {Object.keys(answers).length === 0 && (
                                <p className="italic text-gray-500">No text answers submitted.</p>
                            )}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg md:text-xl font-pixel text-valley-green mb-4 border-b-2 border-valley-green/20 pb-2">
                            Metadata
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
                            <div>
                                <span className="font-bold">Applied:</span> {new Date(application.created_at).toLocaleString()}
                            </div>
                            <div>
                                <span className="font-bold">Last Updated:</span> {new Date(application.updated_at).toLocaleString()}
                            </div>
                            <div>
                                <span className="font-bold">User ID:</span> <span className="font-mono text-xs">{application.user_id}</span>
                            </div>
                            <div>
                                <span className="font-bold">App ID:</span> <span className="font-mono text-xs">{application.id}</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer Actions */}
                <div className="p-4 md:p-6 border-t-4 border-valley-brown bg-valley-cream sticky bottom-0 z-10">
                    <div className="flex flex-col sm:flex-row justify-end gap-3 md:gap-4">
                        <button
                            onClick={onClose}
                            disabled={loadingStatus}
                            className="px-4 md:px-6 py-2 border-2 border-valley-brown text-valley-brown font-pixel rounded hover:bg-valley-brown/10 text-sm md:text-base order-2 sm:order-1"
                        >
                            Close
                        </button>

                        <div className="flex gap-2 order-1 sm:order-2">
                            <button
                                onClick={() => updateStatus('pending')}
                                disabled={loadingStatus || application.status === 'pending'}
                                className={`px-3 md:px-4 py-2 border-2 text-sm md:text-base font-pixel rounded transition-colors
                                    ${application.status === 'pending'
                                        ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-500 text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                Reset
                            </button>
                            <button
                                onClick={() => updateStatus('waitlisted')}
                                disabled={loadingStatus || application.status === 'waitlisted'}
                                className={`px-3 md:px-4 py-2 border-2 text-sm md:text-base font-pixel rounded transition-colors
                                    ${application.status === 'waitlisted'
                                        ? 'border-yellow-300 text-yellow-300 cursor-not-allowed'
                                        : 'border-yellow-600 text-yellow-700 hover:bg-yellow-50'
                                    }`}
                            >
                                Waitlist
                            </button>
                            <button
                                onClick={() => updateStatus('rejected')}
                                disabled={loadingStatus || application.status === 'rejected'}
                                className={`px-3 md:px-4 py-2 border-2 text-sm md:text-base font-pixel rounded transition-colors
                                    ${application.status === 'rejected'
                                        ? 'border-red-300 text-red-300 cursor-not-allowed'
                                        : 'border-red-600 text-red-700 hover:bg-red-50'
                                    }`}
                            >
                                Reject
                            </button>
                            <button
                                onClick={() => updateStatus('accepted')}
                                disabled={loadingStatus || application.status === 'accepted'}
                                className={`px-3 md:px-4 py-2 border-2 text-sm md:text-base font-pixel rounded transition-colors
                                    ${application.status === 'accepted'
                                        ? 'border-green-300 text-green-300 cursor-not-allowed'
                                        : 'border-green-600 text-green-700 hover:bg-green-50'
                                    }`}
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
