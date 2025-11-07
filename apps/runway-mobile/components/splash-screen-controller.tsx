import { useSupabaseAuthContext } from "@gstack/auth/supabase";
import { SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

export function SplashScreenController() {
  const { isLoading } = useSupabaseAuthContext();

  if (!isLoading) {
    SplashScreen.hideAsync();
  }

  return null;
}
