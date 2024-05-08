import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Order from "./Order";
import PathNotFound from "./PathNotFound";
import Products from "./Products/Products";
import FeaturedProducts from "./Products/FeaturedProducts";
import NewProducts from "./Products/NewProducts";

export const RouterDemo: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-confirmed" element={<Order />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="*" element={<PathNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterDemo;
