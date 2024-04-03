"use client";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { PropsWithChildren } from "react";

const ThemeProviderParent = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderParent;
