import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import type { Profile } from "../types/database.types";

export function useProfile() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session) {
                setLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", session.user.id)
                .single();

            if (error) {
                throw error;
            }

            setProfile(data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(new Error('Unknown error fetching profile'));
            }
            console.error("Error fetching profile:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return { profile, loading, error, refetch: fetchProfile };
}
