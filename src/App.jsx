import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/header/Header";
import { useMediaQuery } from "@mui/material";
import "./app.css";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "hsl(213, 96%, 18%)",
      dark: "hsl(243, 100%, 62%)",
      light: "hsl(206, 94%, 87%)",
      pastel: "hsl(228,100%,84%)",
      red: "hsl(354,84%,57%)",
    },
    secondary: {
      main: "hsl(231, 11%, 63%)",
      light: "hsl(229, 24%, 87%)",
      contrastText: "hsl(0, 0%, 100%)",
      dark: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231,100%,99%)",
    },
    background: {
      paper: "hsl(0, 0%, 100%)",
    },
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
    fontSize: 16,
  },
});

const App = () => {
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header matches={matches} />
      </ThemeProvider>
    </div>
  );
};

export default App;
