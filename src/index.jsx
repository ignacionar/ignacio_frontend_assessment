import React from "react";
import ReactDOM from "react-dom";
import { Global, ThemeProvider } from "@emotion/react";
import HatchwaysBlog from "./HatchwaysBlog";
import GlobalStyles from "./global";
import globalTheme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <Global styles={GlobalStyles} />
      <HatchwaysBlog />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
