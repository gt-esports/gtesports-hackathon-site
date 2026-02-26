import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import type { Application } from "../types/database.types";
import AdminApplicationView from "../components/Admin/AdminApplicationView";

// Returns current local datetime string for datetime-local input max
function getLocalNow(): string {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
}

function formatDateForCSV(dateStr: string): string {
    const d = new Date(dateStr);
    return d.toLocaleString('en-US', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: true,
    });
}

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [applications, setApplications] = useState<Application[]>([]);
    const [stats, setStats] = useState({ total: 0, pending: 0, accepted: 0, waitlisted: 0 });
    const [selectedApp, setSelectedApp] = useState<Application | null>(null);

    // Sorting state
    const [sortField, setSortField] = useState<'created_at' | 'updated_at'>('created_at');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

    // Date/time filter state
    const [filterStart, setFilterStart] = useState('');
    const [filterEnd, setFilterEnd] = useState('');

    const filteredApplications = useMemo(() => {
        return applications.filter((app) => {
            const appDate = new Date(app.created_at).getTime();
            if (filterStart && appDate < new Date(filterStart).getTime()) return false;
            if (filterEnd && appDate > new Date(filterEnd).getTime()) return false;
            return true;
        });
    }, [applications, filterStart, filterEnd]);

    const sortedApplications = useMemo(() => {
        return [...filteredApplications].sort((a, b) => {
            const dateA = new Date(a[sortField]).getTime();
            const dateB = new Date(b[sortField]).getTime();

            if (sortDirection === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });
    }, [filteredApplications, sortField, sortDirection]);

    const handleSort = (field: 'created_at' | 'updated_at') => {
        if (sortField === field) {
            setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('desc'); // Default to newest first when switching fields
        }
    };

    const handleFilterEndChange = (value: string) => {
        const now = getLocalNow();
        // Cap to current time if user picks a future datetime
        setFilterEnd(value > now ? now : value);
    };

    const exportCSV = () => {
        const csvRows: string[] = [];
        csvRows.push('Name,Email,Submitted,Last Updated');

        for (const app of sortedApplications) {
            const answers = app.answers as Record<string, unknown> | null;
            const name = typeof answers?.full_name === 'string' ? answers.full_name : 'Unknown';
            const email = typeof answers?.email === 'string' ? answers.email : '';

            // Escape CSV fields
            const escapeCsv = (val: string) => `"${val.replace(/"/g, '""')}"`;

            csvRows.push([
                escapeCsv(name),
                escapeCsv(email),
                escapeCsv(formatDateForCSV(app.created_at)),
                escapeCsv(formatDateForCSV(app.updated_at)),
            ].join(','));
        }

        const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `applications_${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
        URL.revokeObjectURL(url);
    };

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
                    const waitlisted = apps?.filter(a => a.status === 'waitlisted').length || 0;
                    setStats({ total, pending, accepted, waitlisted });
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
        <div className="min-h-screen bg-valley-cream p-4 md:p-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-6 md:mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl md:text-4xl font-pixel text-valley-brown text-center md:text-left">Admin Dashboard</h1>
                <button
                    onClick={() => navigate('/dashboard')}
                    className="px-4 py-2 border-2 border-valley-brown text-valley-brown font-pixel hover:bg-valley-brown hover:text-valley-cream transition-colors text-sm md:text-base"
                >
                    Back to User Dashboard
                </button>
            </div>

            <div className="max-w-7xl mx-auto grid gap-6 md:gap-8">

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <div className="bg-valley-green-light border-4 border-valley-green p-4 md:p-6 rounded-lg text-center">
                        <h3 className="font-pixel text-valley-brown opacity-80 mb-2 text-sm md:text-base">Total Applications</h3>
                        <p className="font-pixel text-3xl md:text-4xl text-valley-brown">{stats.total}</p>
                    </div>
                    <div className="bg-gray-100 border-4 border-gray-300 p-4 md:p-6 rounded-lg text-center">
                        <h3 className="font-pixel text-valley-brown opacity-80 mb-2 text-sm md:text-base">Pending Review</h3>
                        <p className="font-pixel text-3xl md:text-4xl text-valley-brown">{stats.pending}</p>
                    </div>
                    <div className="bg-yellow-100 border-4 border-yellow-500 p-4 md:p-6 rounded-lg text-center">
                        <h3 className="font-pixel text-valley-brown opacity-80 mb-2 text-sm md:text-base">Waitlisted</h3>
                        <p className="font-pixel text-3xl md:text-4xl text-valley-brown">{stats.waitlisted}</p>
                    </div>
                    <div className="bg-green-100 border-4 border-green-500 p-4 md:p-6 rounded-lg text-center">
                        <h3 className="font-pixel text-valley-brown opacity-80 mb-2 text-sm md:text-base">Accepted</h3>
                        <p className="font-pixel text-3xl md:text-4xl text-valley-brown">{stats.accepted}</p>
                    </div>
                </div>

                {/* Date Filter & Export */}
                <div className="bg-white border-4 border-valley-brown rounded-lg p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-end">
                        <div className="flex flex-col sm:flex-row gap-4 flex-1">
                            <div className="flex flex-col gap-1">
                                <label className="font-pixel text-xs text-valley-brown uppercase">From</label>
                                <input
                                    type="datetime-local"
                                    value={filterStart}
                                    max={filterEnd || getLocalNow()}
                                    onChange={(e) => setFilterStart(e.target.value)}
                                    className="border-2 border-valley-brown rounded px-3 py-2 text-sm font-mono bg-valley-cream"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-pixel text-xs text-valley-brown uppercase">To</label>
                                <input
                                    type="datetime-local"
                                    value={filterEnd}
                                    min={filterStart || undefined}
                                    max={getLocalNow()}
                                    onChange={(e) => handleFilterEndChange(e.target.value)}
                                    className="border-2 border-valley-brown rounded px-3 py-2 text-sm font-mono bg-valley-cream"
                                />
                            </div>
                            {(filterStart || filterEnd) && (
                                <button
                                    onClick={() => { setFilterStart(''); setFilterEnd(''); }}
                                    className="self-end px-3 py-2 text-sm font-pixel text-valley-brown border-2 border-valley-brown/30 rounded hover:bg-valley-brown/10 transition-colors"
                                >
                                    Clear Filter
                                </button>
                            )}
                        </div>
                        <button
                            onClick={exportCSV}
                            disabled={sortedApplications.length === 0}
                            className="px-4 py-2 bg-valley-green text-white font-pixel text-sm rounded border-2 border-valley-green hover:bg-valley-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                        >
                            Export Names & Emails as CSV ({sortedApplications.length})
                        </button>
                    </div>
                    {(filterStart || filterEnd) && (
                        <p className="mt-2 text-xs font-pixel text-valley-brown/60">
                            Showing {sortedApplications.length} of {applications.length} applications
                        </p>
                    )}
                </div>

                {/* Applications List */}
                <div className="bg-white border-4 border-valley-brown rounded-lg overflow-hidden">
                    <div className="p-3 md:p-4 bg-valley-brown text-valley-cream font-pixel flex flex-col sm:flex-row justify-between items-center gap-2">
                        <h2 className="text-lg md:text-xl">Applications</h2>
                        <span className="text-xs md:text-sm opacity-80">Showing {sortedApplications.length} of {applications.length}</span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left min-w-[600px] md:min-w-0">
                            <thead className="bg-valley-cream border-b-2 border-valley-brown/20 font-pixel text-xs md:text-sm text-valley-brown uppercase tracking-wider">
                                <tr>
                                    <th 
                                        className={`p-3 md:p-4 cursor-pointer transition-all duration-200 group ${sortField === 'created_at' ? 'bg-valley-green text-white shadow-inner rounded-t-sm' : 'hover:bg-gray-100 text-gray-400'}`}
                                        onClick={() => handleSort('created_at')}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className={sortField === 'created_at' ? 'font-black' : 'font-medium'}>Submitted</span>
                                            <span className={`text-sm transition-colors ${sortField === 'created_at' ? 'text-white' : 'text-gray-300 group-hover:text-gray-500'}`}>
                                                {sortField === 'created_at' && sortDirection === 'asc' ? '↑' : '↓'}
                                            </span>
                                        </div>
                                    </th>
                                    <th 
                                        className={`p-3 md:p-4 cursor-pointer transition-all duration-200 group ${sortField === 'updated_at' ? 'bg-valley-green text-white shadow-inner rounded-t-sm' : 'hover:bg-gray-100 text-gray-400'}`}
                                        onClick={() => handleSort('updated_at')}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className={sortField === 'updated_at' ? 'font-black' : 'font-medium'}>Last Updated</span>
                                            <span className={`text-sm transition-colors ${sortField === 'updated_at' ? 'text-white' : 'text-gray-300 group-hover:text-gray-500'}`}>
                                                {sortField === 'updated_at' && sortDirection === 'asc' ? '↑' : '↓'}
                                            </span>
                                        </div>
                                    </th>
                                    <th className="p-3 md:p-4">Applicant</th>
                                    <th className="p-3 md:p-4">Status</th>
                                    <th className="p-3 md:p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-valley-brown/10 font-mono text-xs md:text-sm">
                                {sortedApplications.map((app) => {
                                    const answers = app.answers as Record<string, unknown>;
                                    const fullName = typeof answers?.full_name === 'string' ? answers.full_name : "Unknown";

                                    return (
                                        <tr key={app.id} className="hover:bg-valley-green-light/20 transition-colors">
                                            <td className="p-3 md:p-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span>{new Date(app.created_at).toLocaleDateString()}</span>
                                                    <span className="opacity-50 text-[10px] md:text-xs">{new Date(app.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                </div>
                                            </td>
                                            <td className="p-3 md:p-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span>{new Date(app.updated_at).toLocaleDateString()}</span>
                                                    <span className="opacity-50 text-[10px] md:text-xs">{new Date(app.updated_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                </div>
                                            </td>
                                            <td className="p-3 md:p-4">
                                                <div className="font-bold text-valley-brown">
                                                    {fullName}
                                                </div>
                                                <div className="font-mono text-[10px] md:text-xs opacity-50 truncate max-w-[100px] md:max-w-none">
                                                    {app.user_id}
                                                </div>
                                            </td>
                                            <td className="p-3 md:p-4">
                                                <span className={`px-2 py-1 rounded text-[10px] md:text-xs font-bold uppercase tracking-wide ${app.status === 'accepted' ? 'bg-green-100 text-green-800' :
                                                    app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                        app.status === 'waitlisted' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                            <td className="p-3 md:p-4 text-right">
                                                <button
                                                    onClick={() => setSelectedApp(app)}
                                                    className="text-valley-blue hover:text-valley-blue-dark font-bold hover:underline whitespace-nowrap"
                                                >
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                                {sortedApplications.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="p-8 text-center text-gray-500 italic">
                                            {applications.length === 0
                                                ? 'No applications found.'
                                                : 'No applications match the selected date range.'}
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
