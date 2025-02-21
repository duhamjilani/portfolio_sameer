import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { HelmetProvider } from "react-helmet-async";
//import '@fortawesome/fontawesome-free/css/all.min.css';
import "animate.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<HelmetProvider>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </HelmetProvider>

);
