import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="nav-icons">मेरोNexus</span>
        </Link>
        <HomeOutlinedIcon className="nav-icons" />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} className="nav-icons" />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} className="nav-icons" />
        )}
        <GridViewOutlinedIcon className="nav-icons" />
        <div className="search">
          <SearchOutlinedIcon className="nav-icons" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="right">
        <PersonOutlinedIcon className="nav-icons" />
        <EmailOutlinedIcon className="nav-icons" />
        <NotificationsOutlinedIcon className="nav-icons" />
        <div className="user nav-name">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
