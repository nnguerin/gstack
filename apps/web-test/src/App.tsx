import { SupabaseAuthProvider } from "@gstack/auth/supabase";
import { supabase } from "./lib/supabase";
import Test from "./components/Test";

function App() {
  console.log("App component rendered", supabase);

  return (
    <SupabaseAuthProvider client={supabase}>
      <Test />
    </SupabaseAuthProvider>
  );
}

export default App;
