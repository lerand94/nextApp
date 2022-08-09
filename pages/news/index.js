import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News page</h1>
      <ul>
        <li>
          <Link href="/news/next-js">NextJS is a great framework</Link>
        </li>
        <li>
          <a href="/news/smth">smth else</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
