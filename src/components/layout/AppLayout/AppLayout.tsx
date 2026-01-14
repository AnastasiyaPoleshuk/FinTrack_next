"use client";

import { CSSProperties, ReactElement, ReactNode } from "react";
import { Layout } from "antd";
import { appConfig } from "@config/appConfig";
import { Header } from "../Header";

const { Footer, Content } = Layout;

const footerStyle: CSSProperties = {
  textAlign: "center",
  borderTop: "1px solid var(--ant-color-border)",
  width: "100vw",
};

const layoutStyle: CSSProperties = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100vw",
  height: "100vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const contentStyle: CSSProperties = {
  height: "100vh",
  padding: "var(--ant-padding-lg)",
  width: "80vw",
};

export const AppLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return (
    <Layout style={layoutStyle}>
      <Header />
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>{appConfig.description}</Footer>
    </Layout>
  );
};
