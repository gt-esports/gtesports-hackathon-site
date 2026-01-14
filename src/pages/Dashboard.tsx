import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../utils/supabaseClient";
import type { Application } from "../types/database.types";
import DashboardHero from "../components/Dashboard/DashboardHero";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [applications, setApplications] = useState<Application[]>([]);

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
          .eq('user_id', session.user.id)
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
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 hero-pixel-clouds z-0" />
      <DashboardHero user={user} applications={applications} />
    </div>
  );
}
