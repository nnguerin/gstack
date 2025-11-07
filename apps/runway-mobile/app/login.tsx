import { StyleSheet, View } from "react-native";
import { LoginScreen } from "@gstack/ui-mobile";
import { useSupabaseAuthContext } from "@gstack/auth/supabase";
import { useState } from "react";

export default function LoginScreenContainer() {
  const { signIn, signUp } = useSupabaseAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View style={styles.container}>
        <LoginScreen
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onSignIn={() => signIn(email, password)}
          onSignUp={() => signUp(email, password)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
