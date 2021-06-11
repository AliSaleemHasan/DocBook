import React, { useRef } from "react";
import "./Login.css";
import Avatar from "@material-ui/core/Avatar";
import requests from "../../handleRequests";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/userSlice";
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const logIn = (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passwordRef.current.value) return;
    requests
      .login(emailRef.current.value, passwordRef.current.value)
      .then((data) => {
        if (data.user) {
          dispatch(addUser(data.user));
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="login__container">
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
            <input ref={emailRef} type="email" placeholder="Email..." />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password..."
            />
            <p>forgot password!</p>
            <button onClick={logIn}>LOGIN</button>
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
          Dont have account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
