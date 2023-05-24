import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import List from "./components/List";
import ListaCompras from "./components/ListaCompras"

ReactDOM.render(
  <React.StrictMode>

    <ListaCompras/>

  </React.StrictMode>,
  document.getElementById("root")
);
