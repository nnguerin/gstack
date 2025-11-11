import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import {
  SupabaseAuthProvider,
  useSupabaseAuthContext,
} from "@gstack/auth/supabase";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { SplashScreenController } from "@/components/splash-screen-controller";
import { supabase } from "@/lib/supabase";

export const unstable_settings = {
  anchor: "(tabs)",
};

function RootNavigator() {
  const { isLoggedIn } = useSupabaseAuthContext();

  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SupabaseAuthProvider client={supabase}>
        <StatusBar style="auto" />
        <SplashScreenController />
        <RootNavigator />
      </SupabaseAuthProvider>
    </ThemeProvider>
  );
}
