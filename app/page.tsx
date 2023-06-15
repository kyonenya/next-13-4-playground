import { Suspense } from "react";
import { PostList } from "./_components/PostList";

export default function Home() {
  return (
    <main>
      <div>
        <h1>App Sample</h1>
      </div>
      <div>
        {/* ここでキャッチしなければpage.tsxを漏れ出てloading.tsxでキャッチされる */}
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <PostList />
        {/* </Suspense> */}
      </div>
    </main>
  );
}
