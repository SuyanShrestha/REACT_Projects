import { useRef, React } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/shristi.png";
import user_2 from "../../assets/mariyam.jpg";
import user_3 from "../../assets/safal.jpg";
import user_4 from "../../assets/abhinas.png";


const Testimonials = () => {
  // back and next button clicks ko lagi functionality\
  const slider = useRef();

  // MEDIA QUERY KO LAGI REACT MAI YESARI NI GARNA MILXA RAIXA
  const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
//   current translation of slider ko lagi tx variable
  let tx = 0;

  /* slide by 25% on each slide */
  const slideForward = () => {

    if (isSmallScreen) {
    // If the viewport width is less than 600px, allow tx to go up to -75
    if (tx > -75) {
      tx -= 25;
    }
    } else {
      // If the viewport width is 600px or more, allow tx to go up to -50 (like before)
      if (tx > -50) {
        tx -= 25;
      }
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          {/* testimonial - 1 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Shristi Koju</h3>
                  <span>Sikaaibindu, Nepal</span>
                </div>
              </div>
              <p>
                Sikaaibindu's immersive approach to education expanded my
                horizons. By combining theory with hands-on experience, I gained
                practical skills and confidence to tackle real-world challenges
                head-on. It's where knowledge truly comes alive!
              </p>
            </div>
          </li>
          {/* testimonial - 2 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mariyam Shrestha</h3>
                  <span>Sikaaibindu, Nepal</span>
                </div>
              </div>
              <p>
                Sikaaibindu stands out as a beacon of academic excellence! Their
                commitment to nurturing intellect and fostering growth is
                unparalleled. With their guidance, I've unlocked my full
                potential and embraced a brighter future.
              </p>
            </div>
          </li>
          {/* testimonial - 3 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Safal Adhikari</h3>
                  <span>Sikaaibindu, Nepal</span>
                </div>
              </div>
              <p>
                At Sikaaibindu, knowledge knows no bounds! Through their
                exceptional academic programs, I've not only gained invaluable
                insights but also discovered my true potential. Thank you for
                paving the path to success
              </p>
            </div>
          </li>
          {/* testimonial - 4 */}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Abhinas Regmi</h3>
                  <span>Sikaaibindu, Nepal</span>
                </div>
              </div>
              <p>
                Sikaaibindu is a sanctuary for intellectual growth! With their
                top-notch faculty and innovative approach to education, I've
                found myself inspired and equipped to conquer any academic
                challenge. Here's to endless learning and limitless
                possibilities!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials
 