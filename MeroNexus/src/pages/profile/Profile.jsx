import React from "react";
import "./profile.scss";

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

import { useParams } from "react-router-dom";

const Profile = () => {
  // useParams hook le chahi URL parameters bata object of key value pair dinxa, jasbata hami id nikalni
  const { id } = useParams();
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://www.teahub.io/photos/full/357-3578179_facebook-cover-photo-texture.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-1/334460295_9750999404925900_7907884573880425393_n.jpg?stp=dst-jpg_s320x320&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XI_W44PJMe4AX9QPmx-&_nc_ht=scontent.fktm1-1.fna&oh=00_AfD-ddkAnwL-Ry-0BLhy7doJ6m1UKVxwreoD3E970vZOtQ&oe=65FD43C3"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/suyanshrestha.9696">
              <FacebookTwoToneIcon fontSize="medium" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="medium" />
            </a>
            <a href="https://www.linkedin.com/in/suyanshrestha/">
              <LinkedInIcon fontSize="medium" />
            </a>
          </div>

          <div className="center">
            <span>Suyan Shrestha</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>www.suyanshrestha.com.np</span>
              </div>
            </div>
            <button>Follow</button>
          </div>

          <div className="right">
            <span>
              <EmailOutlinedIcon />
            </span>
            <span>
              <MoreVertIcon />
            </span>
          </div>
        </div>
        {/* <Posts /> */}
        {/* parseInt le chahi id lai string bata integer banaidinxa. yesle string ra radix linxa, yesma radix 10 rakhem vanexi decimal maa change garyo */}
        {/* aba route maa ta string maa hunxa, tarw uta props banayera Posts bata pathauda id ta integer xa, ani compare garna ta duitai same datatype chahiyo, So lets use parseInt */}
        <Posts id={parseInt(id, 10)} />
      </div>
    </div>
  );
};

export default Profile;
