import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import "./Header.css";
const auth = getAuth(app);
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/Product">Product</Link>
        {user?.uid && <Link to="/vip">Vip</Link>}
        <Link to="/order">Order</Link>
        <Link to="/register">Register</Link>
        <span style={{ marginRight: "10px" }}>{user?.displayName}</span>
        {user?.uid ? (
          <button onClick={() => signOut(auth)}>Log out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
