import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function Login() {
  const handleSignIn = async (formData: FormData) => {
    "use server";
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const supabase = createServerActionClient({ cookies });
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

    revalidatePath("/");
  };

  const handleSignOut = async () => {
    "use server";
    const supabase = createServerActionClient({ cookies });
    await supabase.auth.signOut();
    revalidatePath("/");
  };

  // const handleSignUp = async (formData: FormData) => {
  //   "use server";
  //   const email = String(formData.get("email"));
  //   const password = String(formData.get("password"));

  //   const supabase = createServerActionClient({ cookies });
  //   await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: "http://localhost:3000/auth/callback",
  //     },
  //   });

  //   revalidatePath("/");
  // };

  return (
    <form
      // action={handleSignUp}
      className="flex flex-row space-x-4 items-center"
    >
      <input
        name="email"
        placeholder="Email"
        className="px-2 py-1 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-sm text-gray-600 bg-gray-200"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="px-2 py-1 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-sm text-gray-600 bg-gray-200"
      />
      {/* <button className="px-3 py-1 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 focus:outline-none">
        Sign up
      </button> */}
      <button
        formAction={handleSignIn}
        className="px-3 py-1 rounded-md bg-green-500 text-white text-sm font-medium hover:bg-green-600 focus:outline-none"
      >
        Sign in
      </button>
      <button
        formAction={handleSignOut}
        className="px-3 py-1 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 focus:outline-none"
      >
        Sign out
      </button>
    </form>
  );
}
