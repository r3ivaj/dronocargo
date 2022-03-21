import { createTheme } from "@mui/material/styles";
import { grey, main } from "./colors";
import { SHADE } from "../utils/constants";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Arial", "sans-serif"].join(","),
    h1: {
      fontSize: "1.875rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "1.875rem",
      fontWeight: 300,
      opacity: 0.5,
    },
    h3: {
      fontSize: "1.5rem",
    },
  },
  palette: {
    primary: {
      main,
    },
    grey: {
      [SHADE._0]: grey[SHADE._0],
      [SHADE._50]: grey[SHADE._50],
      [SHADE._100]: grey[SHADE._100],
      [SHADE._200]: grey[SHADE._200],
    },
  },
});

export default theme;
