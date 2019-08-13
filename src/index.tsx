// import "../styles/main.scss";
import React from "react";
import { render } from "react-dom";
import BootstrapProvider from "@bootstrap-styled/provider";
import GlobalStyle from "./components/GlobalStyle";
import App from "./components/App";

render(
  <BootstrapProvider reset={true} injectGlobal={true}>
    <GlobalStyle />
    <App />
  </BootstrapProvider>,
  document.getElementById("root")
);
