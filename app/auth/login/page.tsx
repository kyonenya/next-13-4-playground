import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import Login from "@/app/login";

/**
 * ログインページ
 *
 * 使ってないけど残しとく
 * @url https://github.com/haruyasu/nextjs-supabase-auth-tutorial/blob/master/app/auth/login/page.tsx
 * */
const LoginPage = async () => {
  const supabase = createServerComponentClient({
    cookies,
  });

  // セッションの取得
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 認証している場合、リダイレクト
  if (session) {
    redirect("/");
  }

  return <Login />;
};

export default LoginPage;
