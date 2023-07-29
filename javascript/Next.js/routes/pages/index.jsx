import Link from "next/link";

function Index() {
  return (
    <>
      <h1>Main Index at /</h1>
      <Link href="/posts">Go to Posts</Link>
    </>
  );
}

export default Index;
