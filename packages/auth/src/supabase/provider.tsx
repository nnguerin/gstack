import React from "react";
import { createSupabaseClient, SupabaseConfig } from "./client.js";
import type { Session } from "@supabase/supabase-js";
import { JSX, PropsWithChildren, useEffect, useState } from "react";
import { SupabaseAuthContext } from "./context.js";

interface SupabaseAuthProviderProps {
  config: SupabaseConfig;
  children: React.ReactNode;
}

export function SupabaseAuthProvider({
  config,
  children,
}: PropsWithChildren<SupabaseAuthProviderProps>): JSX.Element {
  const [client] = useState(() => createSupabaseClient(config));
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  console.log("CLIENT", client);

  // Fetch the session once, and subscribe to auth state changes
  useEffect(() => {
    const fetchSession = async () => {
      setIsLoading(true);

      const {
        data: { session },
        error,
      } = await client.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error);
      }

      setSession(session);
      setIsLoading(false);
    };

    fetchSession();

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) => {
      console.log("Auth state changed:", { event: _event, session });
      setSession(session);
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Fetch the profile when the session changes
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);

      if (session) {
        const { data } = await client
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();

        setProfile(data);
      } else {
        setProfile(null);
      }

      setIsLoading(false);
    };

    fetchProfile();
  }, [session]);

  const signIn = async (email: string, password: string) => {
    const { error } = await client.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string) => {
    console.log("trying to sign up", { email, password });
    const { error } = await client.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await client.auth.signOut();
    if (error) throw error;
  };

  return (
    <SupabaseAuthContext.Provider
      value={{
        client,
        session,
        isLoading,
        profile,
        isLoggedIn: session != undefined,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </SupabaseAuthContext.Provider>
  );
}
