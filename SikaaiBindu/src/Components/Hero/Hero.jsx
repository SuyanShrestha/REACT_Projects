import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure better education for a better Nepal.</h1>
        <p>
          At Sikaaibindu, we provide students with cutting-edge curriculum,
          designed to empower them with the knowledge, skills, and experiences
          needed to excel in the dynamic field of education.
        </p>
        <Link to="about" smooth={true} offset={-150} duration={500}>
          <button className="btn">
            Explore more <img src={dark_arrow} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero
