import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
const auth = getAuth(app);
const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <h1>please Login</h1>
      <div style={{ margin: "10px" }}>
        <button onClick={() => signInWithGoogle()}>Login With Google</button>
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
