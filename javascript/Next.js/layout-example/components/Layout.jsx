import Link from "next/link";

function Layout(props) {
  // create your header and then add your app
  return (
    <>
      <header>
        <nav>
          <Link href="/">Index</Link>
          <Link href="/PageOne">PageOne</Link>
        </nav>
      </header>
      <main>{props.children}</main> {/* add the rest of the app */}
    </>
  );
}

export default Layout;
