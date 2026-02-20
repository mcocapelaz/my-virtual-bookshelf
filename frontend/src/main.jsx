// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import App from "./components/App.jsx";
import Preview from "./components/Preview.jsx";
import BookPreview from "./components/BookPreview.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* We'll put all routes inside Layout using an Outlet */}
      {/* If you prefer, you can move Routes here, but keep it simple first */}
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);

