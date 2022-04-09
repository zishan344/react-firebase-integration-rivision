import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
const auth = getAuth(app);
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handaleSignInGoogle = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h1>please Login</h1>
      <div style={{ margin: "10px" }}>
        <button onClick={handaleSignInGoogle}>Login With Google</button>
      </div>
      <form>
        <input type="email" name="" id="" placeholder="Enter your Email" />
        <br />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Login;
