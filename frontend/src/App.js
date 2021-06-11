import React from "react";
import Login from "./Components/login/Login";
import "./App.css";
import DoctorHome from "./Components/doctorHome/DoctorHome";
import Search from "./Components/search/Search";
import PatientHome from "./Components/patientHome/PatientHome";
import Signup from "./Components/signup/Signup";
import { Selector as userSelector } from "./redux/slices/userSlice";
import { useSelector } from "react-redux";
// import Header from "./Components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const user = useSelector(userSelector);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/search" component={Search} />
          <Route exact path="/">
            {!user ? (
              <PatientHome />
            ) : user.accountType === "Doctor" ? (
              <DoctorHome />
            ) : (
              <PatientHome />
            )}
          </Route>
        </Switch>
      </Router>
      {/* <Login /> */}
      {/* <Header /> */}
      {/* <Search /> */}
      {/* <PatientHome /> */}
      {/* <DoctorHome /> */}
      {/* login page */}
      {/* login */}
      {/* signup */}
      {/* after login or sign up and fetch the user */}
      {/* if user is patient */}
      {/* Home page  for users*/}
      {/* Search result page  */}
      {/* search result component */}
      {/* map */}
      {/* doctorCheckOut page */}
      {/* setting page */}
      {/* if user is doctor */}
      {/* Appointment page*/}
      {/* callender */}
      {/* setting page for doctor */}
    </div>
  );
}

export default App;
