import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";
import type { AuthContextType } from "./types";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // supabase.auth.getUser().then(({ data, error }) => {
    // if (!error) setUser(data.user);
    async function fetchSession() {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        setUser(data.session?.user ?? null);
      } catch (err) {
        console.log(
          err instanceof Error
            ? err.message
            : "There was an issue fetching the session"
        );
      } finally {
        setLoading(false);
      }
    }
    fetchSession();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value: AuthContextType = {
    user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
