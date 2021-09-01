import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { MarketStateProvider } from "./contexts/MarketsContext";

ReactDOM.render(
  <MarketStateProvider>
    <App />
  </MarketStateProvider>,
  document.getElementById("root")
);
