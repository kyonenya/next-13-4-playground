import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="flex justify-center items-center">
      <Image
        src="https://3.bp.blogspot.com/-4tQDFzywlyE/VdL1J-vvleI/AAAAAAAAw6g/AvHAtxkyE-Y/s400/maruhi_mark.png"
        width={450}
        height={450}
        alt="マル秘"
      ></Image>
    </div>
  );
}
