import React, { useRef } from "react";
import "./Signup.css";
import requests from "../../handleRequests";
import { Link } from "react-router-dom";
function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const full_nameRef = useRef();

  const signUp = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    console.log(full_nameRef.current.value);

    requests

      .signUpAsPatient(
        emailRef.current.value,
        passwordRef.current.value,
        passwordRef.current.value,
        full_nameRef.current.value
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup">
      <div className="signup__contianer">
        <img
          className="login__logo"
          src="DocBookLogo.png"
          alt="Logo"
          width={125}
          height={50}
        />

        <section className="signup__email">
          <h2>Sign up</h2>

          <form action="">
            <input
              ref={full_nameRef}
              type="text"
              placeholder="Full Name..."
              required
            />
            <input
              ref={emailRef}
              type="email"
              placeholder="Email..."
              required
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="password..."
              required
            />
            <input type="password" placeholder="Confirm password..." />
            <div className="doctor__checkbox">
              <input type="checkbox" id="doctorCheck" />
              <label htmlFor="doctorCheck">Are you a doctor</label>
            </div>

            <button onClick={signUp}>Sign up</button>
          </form>
        </section>

        <p className="signup__HaveAccount">
          Have account?{" "}
          <Link to="/login" className="blue__important">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
