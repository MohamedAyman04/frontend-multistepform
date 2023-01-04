import React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline, useMediaQuery, Container } from "@mui/material";
import { themeOptions } from "./theme";
import Navbar from "./Navbar/Navbar";

const App = () => {
  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
      </ThemeProvider>
    </div>
  );
};

export default App;
