import React from "react";

const Login = () => {
  return (
    <div>
      <h1>please Login</h1>
      <div style={{ margin: "10px" }}>
        <button>Login With Google</button>
      </div>
      <form>
        <input type="email" name="" id="" placeholder="Enter your Email" />
        <br />
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
