import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <span className="logo">khaniGoals?</span>
          <p>
            "Inspiring Taste, Delivering Dreams" encapsulates our ethos at
            KhaniGoals. We strive to ignite your taste buds with culinary
            wonders while fulfilling your desires and dreams. From the first
            bite to the last, we're committed to delivering exceptional flavors
            and unforgettable experiences right to your doorstep.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+977 123-456-7890</li>
            <li>contact@khanigoals.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 © khanigoals.com - All Rights Reserved
      </p>
    </div>
  );
}

export default Footer
