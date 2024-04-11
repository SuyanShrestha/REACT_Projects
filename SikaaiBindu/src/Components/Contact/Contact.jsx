import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
    // WEB3FORMS ko docs bata 
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "36c6276c-7957-479b-a828-3e93cd88c7f4");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className="contact">
        {/* left patti ko description ko lagi */}
        <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
            Have a question or need more information? We're here to help! Feel
            free to reach out to us anytime. Your journey towards academic
            excellence starts here.
        </p>
        {/* aba email-id, phone number etc rakhna lai */}
        <ul>
            <li><img src={mail_icon} alt="" />contact@suyan.dev</li>
            <li><img src={phone_icon} alt="" />+977 9861609800</li>
            <li><img src={location_icon} alt="" />Gurjudhara, Chandragiri-17 <br /> Kathmandu, Nepal</li>
        </ul>
        </div>

        {/* right patti ko form ko lagi */}
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            {/* status vanna lai span */}
            <span>{result}</span>
        </div>
    </div>
  );
}

export default Contact
