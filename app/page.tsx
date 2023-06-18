import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function ServerComponent() {
  const supabase = createServerComponentClient({ cookies });
  return <pre>{JSON.stringify(await supabase.auth.getUser(), null, 2)}</pre>;
}
