import "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    text?: {
      primary?: string;
      secondary?: string;
    };
  }
}
export {};
