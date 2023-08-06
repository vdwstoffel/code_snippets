import Link from "next/link";

export default function Index() {
  return (
    <>
      <h1>Main Index at /</h1>
      <Link href="/posts">Go to Posts</Link>
    </>
  );
}
