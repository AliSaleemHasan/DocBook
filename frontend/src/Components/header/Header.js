import React from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Selector as userSelector,
  addUser,
} from "../../redux/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import requests from "../../handleRequests";
function Header() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const logout = (e) => {
    requests
      .logout()
      .then((data) => {
        console.log(data);
        dispatch(addUser(null));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="header">
      <section className="header__logo">
        <Link to="/">
          <img src="/DocBookLogo.png" alt="logo" width={100} height={40} />
        </Link>
      </section>
      <section className="header__search">
        <input type="text" placeholder="Search..." />
        <Link to="/search">
          <Search />
        </Link>
      </section>
      {user ? (
        <section className="header__avatar">
          <button onClick={logout}>logout</button>
          <Avatar />
        </section>
      ) : (
        <section className="header__login">
          <Link to="/login">Log in</Link>
        </section>
      )}
    </div>
  );
}

export default Header;
