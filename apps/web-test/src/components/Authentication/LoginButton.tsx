import { useSupabaseAuthContext } from "@gstack/auth/supabase";
import { Button } from "@gstack/ui-web/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@gstack/ui-web/components/ui/dialog";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const LoginButton = () => {
  const { client } = useSupabaseAuthContext();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Fill out the form to sign in or sign up
          </DialogDescription>
        </DialogHeader>
        <Auth supabaseClient={client} appearance={{ theme: ThemeSupa }} />
      </DialogContent>
    </Dialog>
  );
};

export default LoginButton;
