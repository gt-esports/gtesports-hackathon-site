import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import DashboardHero from "../components/DashboardHero";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
          navigate("/login");
          return;
        }

        setUser(session.user);

        // Fetch applications
        const { data: apps, error: appsError } = await supabase
          .from('applications')
          .select('*')
          .order('created_at', { ascending: false });

        if (appsError) {
          console.error("Error fetching applications:", appsError);
        } else {
          setApplications(apps || []);
        }

      } catch (error) {
        console.error("Error checking auth:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-valley-cream flex items-center justify-center">
        <div className="text-valley-brown font-pixel text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full hero-pixel-clouds relative">
      <DashboardHero user={user} applications={applications} />
    </div>
  );
}
