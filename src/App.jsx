import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import Footer from "./Components/Footer";
import "./index.css"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <br />
      <br />
      <Footer />
    </Router>
  );
};

export default App;
