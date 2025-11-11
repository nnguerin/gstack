import { useSupabaseAuthContext } from "@gstack/auth/supabase";
import LoginButton from "./Authentication/LoginButton";
import SignOutButton from "./Authentication/SignOutButton";

const Header = () => {
  const { isLoggedIn } = useSupabaseAuthContext();

  return (
    <div className="flex justify-between border-b-1 p-2">
      <div>left</div>
      <div>center</div>
      <div className="flex gap-2">
        {!isLoggedIn ? <LoginButton /> : <SignOutButton />}
      </div>
    </div>
  );
};

export default Header;
