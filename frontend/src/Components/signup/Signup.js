import React, { useRef, useState } from "react";
import "./Signup.css";
import requests from "../../handleRequests";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/slices/userSlice";
function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const full_nameRef = useRef();
  const specialization_ref = useRef();
  const [isDoctor, setIsDoctor] = useState(false);

  const dispatch = useDispatch();

  const signUp = (e) => {
    e.preventDefault();

    if (
      !emailRef.current.value ||
      !passwordRef.current.value ||
      !full_nameRef.current.value
    )
      return;
    if (!specialization_ref.current)
      requests
        .signUpAsPatient(
          emailRef.current.value,
          passwordRef.current.value,
          passwordRef.current.value,
          full_nameRef.current.value
        )
        .then((data) => {
          if (data.user) dispatch(addUser(data.user));
          else console.log("err");
        })
        .catch((err) => console.log(err));
    else
      requests
        .signUpAsDoctor(
          emailRef.current.value,
          passwordRef.current.value,
          passwordRef.current.value,
          full_nameRef.current.value,
          specialization_ref.current.value
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
            <div className="is__doctor">
              <div className="doctor__checkbox">
                <input
                  type="checkbox"
                  id="doctorCheck"
                  onChange={(e) => setIsDoctor(e.target.checked)}
                />
                <label htmlFor="doctorCheck">Are you Doctor</label>
              </div>
              {isDoctor && (
                <div className="doctor__specialization">
                  <label htmlFor="specialization">
                    choose your specialization
                  </label>
                  <select id="specialization" ref={specialization_ref}>
                    <option value="اسنان">اسنان</option>
                    <option value="عام">عام</option>
                    <option value="اطفال">اطفال</option>
                    <option value="عظمية">عظمية</option>
                  </select>
                </div>
              )}
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
