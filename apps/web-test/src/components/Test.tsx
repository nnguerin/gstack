import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSupabaseAuthContext } from "@gstack/auth/supabase";

const Test = () => {
  const { session, client } = useSupabaseAuthContext();

  console.log(session);

  if (!session) {
    return <Auth supabaseClient={client} appearance={{ theme: ThemeSupa }} />;
  } else {
    return <div>Logged in!</div>;
  }
};

export default Test;
