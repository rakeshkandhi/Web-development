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
import Users from "./Users/Users";
import UserDetails from "./Users/UserDetails";
import Admin from "./Admin";
import FetchDemo from "../APIs/FetchDemo";

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
          <Route path="user" element={<Users />}>
            <Route index element={<UserDetails />} />
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<PathNotFound />} />
          <Route path="note" element={<FetchDemo />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterDemo;
