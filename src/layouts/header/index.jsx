import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Index.scss";

import { useDispatch, useSelector } from "react-redux";
import { setIsAuth } from "../../store/userReducer";
import { clearUserData } from "../../store/profileReducer";

const Header = () => {

  const loggedIn = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    dispatch(setIsAuth(false)); // Update isAuth state in Redux store
    dispatch(clearUserData())

    window.location.reload();
  }
 
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={"Navbar"}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "1.5vw" }}>Logo</h2>
            <div>
              <ul
                style={{
                  display: "flex",
                  gap: "3vw",
                  alignItems: "center",
                }}
              >
                <NavLink className={"Navpage"} to={"/"}>
                  Home Page
                </NavLink>
                <NavLink className={"Navpage"} to={"/opportunities"}>
                  Opportunities
                </NavLink>
                <NavLink className={"Navpage"} to={"/about"}>
                  About
                </NavLink>
                <NavLink className={"Navpage"} to={"/forum"}>
                  Forum
                </NavLink>
                <NavLink className={"Navpage"} to={"/owner"}>
                  Apartment owner
                </NavLink>
              </ul>
            </div>
          </div>

          {loggedIn ? (
            <Link className="authButton" to={"/"} onClick={handleLogout}>
              Logout
              </Link>
            ) : (
              <Link to={"/login"} className="authButton">
                Sign Up
              </Link>
              )
          }
        </div>
      </div>
    </>
  );
};

export default Header;

// b