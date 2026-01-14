"use client";

import React, { useEffect, useState } from "react";
import { ConfigProvider, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#f7b500ff",
          },
          algorithm: mounted ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <div style={{ visibility: mounted ? "visible" : "hidden" }}>
          {children}
        </div>
      </ConfigProvider>
    </AntdRegistry>
  );
};
