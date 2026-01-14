"use client";

import { Result } from "antd";
import Link from "next/link";

const NotFound = () => {
  return (
    <Result
      status="404"
      title="Something went wrong"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link href={"/"}>Back Home</Link>}
    />
  );
};

export default NotFound;
