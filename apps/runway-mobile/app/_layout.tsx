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

export const unstable_settings = {
  anchor: "(tabs)",
};

function RootNavigator() {
  const { isLoggedIn } = useSupabaseAuthContext();

  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const supabaseClientConfig = {
    supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL ?? "",
    supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "",
  };

  console.log(supabaseClientConfig);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SupabaseAuthProvider config={supabaseClientConfig}>
        <SplashScreenController />
        <RootNavigator />
        <StatusBar style="auto" />
      </SupabaseAuthProvider>
    </ThemeProvider>
  );
}
