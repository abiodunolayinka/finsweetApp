// import React ,{ Component } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Product from "./pages/Product/Product";
import AboutUs from "./pages/About/AboutUs";
import Blog from "./pages/Blog/blog";
import BlogPost from "./pages/Blogpost/BlogPost";
import Price from "./pages/Price/Price";
import Contact from "./pages/Contact/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="BlogPost" element={<BlogPost />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
