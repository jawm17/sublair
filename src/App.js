import React from 'react';
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./index.css";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} exact  />
        <Route path="/shop" element={<Home/>} exact  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
