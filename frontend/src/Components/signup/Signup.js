import React, { useRef, useState } from "react";
import "./Signup.css";
import requests from "../../handleRequests";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/userSlice";
import Map from "../map/Map";
function Signup() {
  const emailRef = useRef();
  const history = useHistory();
  const passwordRef = useRef();
  const full_nameRef = useRef();
  const specialization_ref = useRef();
  const [location, setLocation] = useState();
  const [isDoctor, setIsDoctor] = useState(false);
  const dispatch = useDispatch();

  //get coordinates from map when user click it
  const getCoordinates = (coordinates) => {
    console.log(coordinates);
    setLocation(coordinates);
  };

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
          if (data.user) {
            dispatch(addUser(data.user));
            history.push("/");
          } else console.log("err");
        })
        .catch((err) => console.log(err));
    else
      requests
        .signUpAsDoctor(
          emailRef.current.value,
          passwordRef.current.value,
          passwordRef.current.value,
          full_nameRef.current.value,
          specialization_ref.current.value,
          location
        )
        .then((data) => {
          if (data.user) {
            dispatch(addUser(data.user));
            history.push("/");
          } else {
            console.log("err");
          }
        })
        .catch((err) => console.log(err));
  };

  return (
    <div className="signup">
      <div className={`signup__contianer ${isDoctor && "doctor__signup"}`}>
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
              className="form__input"
              required
            />
            <input
              ref={emailRef}
              type="email"
              placeholder="Email..."
              className="form__input"
              required
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="password..."
              className="form__input"
              required
            />
            <input
              className="form__input"
              type="password"
              placeholder="Confirm password..."
            />
            <div className="is__doctor">
              <div className="doctor__checkbox">
                <input
                  type="checkbox"
                  id="doctorCheck"
                  onChange={(e) => setIsDoctor(e.target.checked)}
                />
                <label htmlFor="doctorCheck">Are you Doctor</label>
              </div>
            </div>

            {isDoctor && (
              <>
                <div className="doctor__location">
                  <label className="map__label">
                    Please click on your location
                  </label>
                  <Map getCoordinates={getCoordinates} type="signup" />
                  {location && <p>we save your location</p>}
                </div>
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
              </>
            )}
            <button className="signup__button" onClick={signUp}>
              Sign up
            </button>
          </form>
        </section>

        {!isDoctor && (
          <p className="signup__HaveAccount">
            Have account?
            <Link to="/login" className="blue__important">
              Log in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Signup;
