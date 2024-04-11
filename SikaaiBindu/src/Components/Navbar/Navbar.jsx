import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import cross_icon from '../../assets/cross-icon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  // aba first page maa navbar transparent, ani baki ko page maa white background ko lagi arko color chahiyeko vayerw yo useState ra useEffect garnu paryo
  const [sticky, setSticky] = useState(false);

  // scroll by 200px, navbar dark nav class add garne
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);


  // mobile screen maa navbar hide show garna lai
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);    // true vaye false garni and false vaye true garni

  }

  return (
    // white background maa white text nadekhni vara darknav classname ni thapeko

    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      {/* <img src={logo} alt="" className='logo'/> */}
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <span className="logo">
          <FontAwesomeIcon icon={faBookOpenReader} />
          <i className="sikaai">सिकाइ</i>bindu
        </span>
      </Link>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        {/* link to garda kheri unique classname vaye tei to=classname mai jani vo direct */}
        {/* yedi unique xaina vane chahi uta harek component maa chahi id ko naam dinu parni hunxa */}
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            <button className="btn">Contact us</button>
          </Link>
        </li>
      </ul>
      {mobileMenu ? (
        <img
          src={cross_icon}
          alt=""
          className="menu-icon"
          onClick={toggleMenu}
        />
      ) : (
        <img
          src={menu_icon}
          alt=""
          className="menu-icon"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
