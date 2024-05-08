import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products: React.FC = () => {
  return (
    <>
    <div>
      <input type="text" placeholder="Search products" />
    </div>
    <Link className="nav-link" to="featured">Featured</Link>
    <Link className="nav-link" to="new">New</Link>
    <Outlet />
    </>
  );
};

export default Products;
