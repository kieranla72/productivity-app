import { createTheme } from "@mui/material/styles";
import { cyan, green } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: cyan[600],
    },
    secondary: {
      main: green[500],
    },
  },
});
