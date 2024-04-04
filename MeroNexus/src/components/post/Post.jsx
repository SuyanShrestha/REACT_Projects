import React from "react";
import "./post.scss";

import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
// import { comments } from "../comments/Comments";

import { useState, useEffect } from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import User from "../users/User";

const Post = ({ post, postLikes, postTime }) => {
  // aaile lai chahi gareko xu yestai, paxi milamlaa...liked xa vani rato backgrnd wala icon hanni vanerw
  const liked = false;

  // comments ko lagi
  const [commentOpen, setCommentOpen] = useState(false);
  // likes ko lagi aile lai
  const [likes, setLikes] = useState(0);

  // share ko lagi
  const [shareEnable, setShareEnable] = useState(false);

  useEffect(() => {
    setLikes(postLikes);
  }, [post.id]);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{postTime}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>

        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>

        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {/* {Math.floor(Math.random() * 200)} likes */}
            {likes} likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            {/* <TextsmsOutlinedIcon />{comments.length} comments */}
            <TextsmsOutlinedIcon />2 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {/* {shareEnable && <User/>} */}
        {commentOpen && <Comments />}
        {/* <Comments /> */}
      </div>
    </div>
  );
};

export default Post;
