import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import { PersonOutline } from "react-ionicons";

const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Watch.Me</NavLink>
        <Bars />
        <NavMenu>
          <NavLink
            to="/Movies"
            onClick={() => props.handleViewChange("Movies")}
          >
            Movies
          </NavLink>
          <NavLink
            to="/Series"
            onClick={() => props.handleViewChange("Series")}
          >
            TV Series
          </NavLink>
          <NavLink to="/playlists">Playlists</NavLink>
        </NavMenu>
        {localStorage.getItem("username") !== null ? (
          <div className="hi-user">
            <NavLink to="/myProfile">
              Hi, {localStorage.getItem("username")}{" "}
              <PersonOutline color={"#00000"} height="35px" width="35px" />
            </NavLink>
          </div>
        ) : (
          <NavBtn>
            <NavBtnLink to="/login">Sign In</NavBtnLink>
          </NavBtn>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
