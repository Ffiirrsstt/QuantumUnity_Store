import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Dataprovider } from "./useContext/useContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Dataprovider>
      <App />
    </Dataprovider>
  </React.StrictMode>
);
