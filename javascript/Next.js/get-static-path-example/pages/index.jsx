import Link from "next/link";

export default function Index(props) {
  // receives the data as props argument
  return (
    <>
      <Link href="/1">1</Link>
      <Link href="/2">2</Link>
    </>
  );
}
