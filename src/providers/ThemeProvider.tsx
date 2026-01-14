"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AntdProvider } from "./AntdProvider";
import { ReactNode } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <AntdProvider>{children}</AntdProvider>
    </NextThemesProvider>
  );
};
