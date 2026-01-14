"use client";

import { CSSProperties } from "react";
import { DollarOutlined } from "@ant-design/icons";
import { Flex, Typography, Layout } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { appConfig } from "@config/appConfig";
import styles from "./Header.module.scss";

const { Title } = Typography;
const { Header: AntdHeader } = Layout;

const headerStyle: CSSProperties = {
  background: "transparent",
  display: "flex",
  justifyContent: "space-between",
  fontSize: 20,
  textAlign: "center",
  padding: "var(--ant-padding)",
  width: "80vw",
};

export const Header = () => {
  const pathname = usePathname();

  return (
    <AntdHeader style={headerStyle}>
      <Link href={"/"} className="flex gap-2 items-center">
        <DollarOutlined
          style={{ color: "var(--ant-color-primary)", fontSize: 26 }}
        />
        <Title level={3} style={{ margin: 0 }}>
          {appConfig.title}
        </Title>
      </Link>
      <Flex gap={"middle"} align={"center"} justify={"center"}>
        {appConfig.navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={item.href}
              style={{
                color: isActive
                  ? "var(--ant-color-primary)"
                  : "var(--ant-color-text)",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </Flex>
      <Flex gap={"small"} align={"center"} justify={"center"}>
        <Link className={styles.logIn} href={"/login"}>
          Log in
        </Link>
        <Link className={styles.signUp} href={"/signup"}>
          Sign up
        </Link>
      </Flex>
    </AntdHeader>
  );
};
