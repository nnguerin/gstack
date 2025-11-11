import { useSupabaseAuthContext } from "@gstack/auth/supabase";
import { Button } from "@gstack/ui-web/components/ui/button";

const SignOutButton = () => {
  const { signOut } = useSupabaseAuthContext();

  return (
    <Button variant="outline" onClick={signOut}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
