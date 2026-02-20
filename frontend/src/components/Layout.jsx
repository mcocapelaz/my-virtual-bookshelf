// src/components/Layout.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import App from "./App.jsx";
import Preview from "./Preview.jsx";
import BookPreview from "./BookPreview.jsx";
import React from "react";

export default function Layout() {
  return (
    <div className="container">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<App />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/preview/:id" element={<BookPreview />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
