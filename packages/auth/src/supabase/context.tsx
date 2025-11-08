import { Session, SupabaseClient } from "@supabase/supabase-js";
import { createContext, useContext } from "react";

interface SupabaseAuthContextValue {
  client: SupabaseClient;
  session: Session | null;
  profile: any;
  isLoading: boolean;
  isLoggedIn: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const SupabaseAuthContext = createContext<SupabaseAuthContextValue>({
  client: {} as SupabaseClient,
  session: null,
  profile: null,
  isLoading: false,
  isLoggedIn: false,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

export const useSupabaseAuthContext = () => useContext(SupabaseAuthContext);
