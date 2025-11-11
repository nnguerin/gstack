import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useSupabaseAuthContext } from "@gstack/auth/supabase";

const Account = () => {
  const { profile } = useSupabaseAuthContext();

  const profileText = JSON.stringify(profile, null, 2);

  return (
    <ThemedView>
      <ThemedText>{profileText}</ThemedText>
    </ThemedView>
  );
};

export default Account;
