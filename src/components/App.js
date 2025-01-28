import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
