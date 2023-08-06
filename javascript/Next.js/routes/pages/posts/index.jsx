import { Fragment } from "react";
import Link from "next/link";

export default function News() {
  return (
    <Fragment>
      <h1>Posts Index at /posts</h1>
      <li>
        <Link href="/posts/cats">Cats</Link>
      </li>
      <li>
        <Link href="/posts/dogs">Dogs</Link>
      </li>
    </Fragment>
  );
}
