import "@gstack/ui-web/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SupabaseAuthProvider } from "@gstack/auth/supabase";
import { supabase } from "./lib/supabase.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SupabaseAuthProvider client={supabase}>
      <App />
    </SupabaseAuthProvider>
  </StrictMode>
);
