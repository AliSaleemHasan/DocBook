import React from "react";
import "./Login.css";
import Avatar from "@material-ui/core/Avatar";
function Login() {
  return (
    <div className="login">
      <img
        className="login__logo"
        src="DocBookLogo.png"
        alt="Logo"
        width={125}
        height={50}
      />

      <section className="login__email">
        <h2>Sign in</h2>

        <form action="">
          <input type="email" placeholder="Email..." />
          <input type="password" placeholder="Password..." />
          <p>forgot password!</p>
          <button>LOGIN</button>
        </form>
      </section>
      <section className="Login__otherMethods">
        <p>or sign up using</p>
        <div className="login__methods">
          <Avatar>G</Avatar>
          <Avatar>F</Avatar>
          <Avatar>L</Avatar>
        </div>
      </section>

      <p className="login__dontHaveAccount">
        Dont have account? <span>Sign up</span>
      </p>
    </div>
  );
}

export default Login;
