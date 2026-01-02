import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import type { Application } from "../types/database.types";
import AdminApplicationView from "../components/Admin/AdminApplicationView";

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [applications, setApplications] = useState<Application[]>([]);
    const [stats, setStats] = useState({ total: 0, pending: 0, accepted: 0 });
    const [selectedApp, setSelectedApp] = useState<Application | null>(null);

    // Pagination / Filter states could go here

    useEffect(() => {
        const checkAdminAndFetchData = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                if (!session) {
                    navigate("/login");
                    return;
                }

                // Check if user is admin
                const { data: profile, error: profileError } = await supabase
                    .from('profiles')
                    .select('is_admin')
                    .eq('id', session.user.id)
                    .single();

                if (profileError || !profile?.is_admin) {
                    console.log("Not an admin or error checking admin status", profileError, profile);
                    navigate("/dashboard"); // Redirect non-admins
                    return;
                }

                setIsAdmin(true);

                // Fetch all applications
                // Note: This relies on the new RLS policy allowing admins to select all
                const { data: apps, error: appsError } = await supabase
                    .from('applications')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (appsError) {
                    console.error("Error fetching applications:", appsError);
                } else {
                    setApplications(apps || []);

                    // Calculate stats
                    const total = apps?.length || 0;
                    const pending = apps?.filter(a => a.status === 'pending').length || 0;
                    const accepted = apps?.filter(a => a.status === 'accepted').length || 0;
                    setStats({ total, pending, accepted });
                }

            } catch (error) {
                console.error("Error in admin check:", error);
                navigate("/");
            } finally {
                setLoading(false);
            }
        };

        checkAdminAndFetchData();
    }, [navigate]);

    if (loading) {
        return (
            <div className="min-h-screen bg-valley-cream flex items-center justify-center">
                <div className="text-valley-brown font-pixel text-xl">Verifying Admin Access...</div>
            </div>
        );
    }

    if (!isAdmin) return null; // Should have redirected

    return (
        <div className="min-h-screen bg-valley-cream p-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
                <h1 className="text-4xl font-pixel text-valley-brown">Admin Dashboard</h1>
                <button
                    onClick={() => navigate('/dashboard')}
                    className="px-4 py-2 border-2 border-valley-brown text-valley-brown font-pixel hover:bg-valley-brown hover:text-valley-cream transition-colors"
                >
                    Back to User Dashboard
                </button>
            </div>

            <div className="max-w-7xl mx-auto grid gap-8">

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-valley-green-light border-4 border-valley-green p-6 rounded-lg text-center">
                        <h3 className="font-pixel text-valley-brown opacity-80 mb-2">Total Applications</h3>
                        <p className="font-pixel text-4xl text-valley-brown">{stats.total}</p>
                    </div>
                    <div className="bg-yellow-100 border-4 border-yellow-500 p-6 rounded-lg text-center">
                        <h3 className="font-pixel text-valley-brown opacity-80 mb-2">Pending Review</h3>
                        <p className="font-pixel text-4xl text-valley-brown">{stats.pending}</p>
                    </div>
                    <div className="bg-green-100 border-4 border-green-500 p-6 rounded-lg text-center">
                        <h3 className="font-pixel text-valley-brown opacity-80 mb-2">Accepted</h3>
                        <p className="font-pixel text-4xl text-valley-brown">{stats.accepted}</p>
                    </div>
                </div>

                {/* Applications List */}
                <div className="bg-white border-4 border-valley-brown rounded-lg overflow-hidden">
                    <div className="p-4 bg-valley-brown text-valley-cream font-pixel flex justify-between items-center">
                        <h2 className="text-xl">Applications</h2>
                        <span className="text-sm opacity-80">Showing latest {applications.length}</span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-valley-cream border-b-2 border-valley-brown/20 font-pixel text-sm text-valley-brown uppercase tracking-wider">
                                <tr>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Applicant</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-valley-brown/10 font-mono text-sm">
                                {applications.map((app) => {
                                    const answers = app.answers as Record<string, unknown>;
                                    const fullName = typeof answers?.full_name === 'string' ? answers.full_name : "Unknown";

                                    return (
                                        <tr key={app.id} className="hover:bg-valley-green-light/20 transition-colors">
                                            <td className="p-4 whitespace-nowrap">
                                                {new Date(app.created_at).toLocaleDateString()} <span className="opacity-50 text-xs">{new Date(app.created_at).toLocaleTimeString()}</span>
                                            </td>
                                            <td className="p-4">
                                                <div className="font-bold text-valley-brown">
                                                    {fullName}
                                                </div>
                                                <div className="font-mono text-xs opacity-50">
                                                    {app.user_id}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide ${app.status === 'accepted' ? 'bg-green-100 text-green-800' :
                                                    app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                        app.status === 'waitlisted' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button
                                                    onClick={() => setSelectedApp(app)}
                                                    className="text-valley-blue hover:text-valley-blue-dark font-bold hover:underline"
                                                >
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                                {applications.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="p-8 text-center text-gray-500 italic">
                                            No applications found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedApp && (
                <AdminApplicationView
                    application={selectedApp}
                    onClose={() => setSelectedApp(null)}
                />
            )}
        </div>
    );
}
