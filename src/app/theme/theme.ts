import "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { cyan, green, grey } from "@mui/material/colors";

const primaryColor = cyan[600];
const primaryColorHover = cyan[700];

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: green[500],
    },
    text: {
      secondary: grey[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: primaryColor,
          color: "white",
          "&:hover": {
            backgroundColor: primaryColorHover,
            color: "white",
          },
        },
      },
    },
  },
});
