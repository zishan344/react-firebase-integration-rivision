import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/Product">Product</Link>
        <Link to="/orders">Order</Link>
        <Link to="/orders">Order</Link>
      </nav>
    </div>
  );
};

export default Header;
