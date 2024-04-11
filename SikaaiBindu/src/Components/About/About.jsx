import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={() => {setPlayState(true)}}/>
      </div>

      <div className="about-right"> 
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Igniting minds, <br/> Inspiring futures.</h2>

        <p>
          At Sikaaibindu, we foster a dynamic learning environment where
          exploration and intellectual growth are paramount. Our institution is
          dedicated to empowering students with the tools and knowledge needed
          to navigate the complexities of the modern world with confidence and
          competence.
        </p>
        <p>
          Our diverse array of courses, led by experienced educators, is
          designed to cater to the unique needs and aspirations of each
          individual. Through personalized attention and innovative teaching
          methodologies, we aim to instill a lifelong love for learning and a
          commitment to academic excellence in our students.
        </p>
        <p>
          With a blend of tradition and innovation, Sikaaibindu stands at the
          forefront of educational advancement. We believe in nurturing not just
          minds, but also character and creativity, preparing our students to
          become engaged citizens and leaders of tomorrow. Join us in shaping
          the future at Sikaaibindu Educational Institute.
        </p>
      </div>
    </div>
  );
}

export default About
