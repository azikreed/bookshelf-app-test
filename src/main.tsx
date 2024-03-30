import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import mainBack from "/main_back.png";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#fff",
            backgroundImage: `url(${mainBack})`,
            backgroundRepeat: "no-repeat",
            fontFamily: "Montserrat, sans-serif",
          },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
