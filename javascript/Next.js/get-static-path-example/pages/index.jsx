import Link from "next/link";

function Index(props) {
  // receives the data as props argument
  return (
    <>
      <Link href="/1">1</Link>
      <Link href="/2">2</Link>
    </>
  );
}

export default Index;
