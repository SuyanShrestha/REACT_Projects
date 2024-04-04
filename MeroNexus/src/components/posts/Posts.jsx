import React from "react";
import "./posts.scss";
import Post from "../post/Post";

const Posts = ({ id }) => {
  // aaile ko lagi temporary post data
  const posts = [
    {
      id: 1,
      name: "Lorem Knight",
      userId: 3,
      profilePic:
        "https://wallpapers-clan.com/wp-content/uploads/2023/07/league-of-legends-jinx-pfp-01.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      postLikes: 10,
      time: "1 min ago",
    },
    {
      id: 2,
      name: "Shristi Koju",
      userId: 2,
      profilePic:
        "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-1/329251366_5743483905747862_7853108977902782179_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vyN9gJ5dnTYAX9px4fq&_nc_ht=scontent.fktm1-1.fna&oh=00_AfCgaWNuLxhz4V_J_uOnlS-njpSVFG-D0ls-OTm64Duoxg&oe=660433FB",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      postLikes: 192,
      time: "2 days ago",
    },
    {
      id: 3,
      name: "Suyan Shrestha",
      userId: 1,
      profilePic:
        "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-1/334460295_9750999404925900_7907884573880425393_n.jpg?stp=dst-jpg_s320x320&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XI_W44PJMe4AX9QPmx-&_nc_ht=scontent.fktm1-1.fna&oh=00_AfD-ddkAnwL-Ry-0BLhy7doJ6m1UKVxwreoD3E970vZOtQ&oe=65FD43C3",
      desc: "useParams ta lit shit raixa lmao.",
      postLikes: 32,
      time: "10 hours ago",
    },
    {
      id: 3,
      name: "Suyan Shrestha",
      userId: 1,
      profilePic:
        "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-1/334460295_9750999404925900_7907884573880425393_n.jpg?stp=dst-jpg_s320x320&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XI_W44PJMe4AX9QPmx-&_nc_ht=scontent.fktm1-1.fna&oh=00_AfD-ddkAnwL-Ry-0BLhy7doJ6m1UKVxwreoD3E970vZOtQ&oe=65FD43C3",
      desc: "aich mero cover pic :v",
      img: "https://www.teahub.io/photos/full/357-3578179_facebook-cover-photo-texture.jpg",
      postLikes: 156,
      time: "1 day ago",
    },
  ];

  const filteredPosts = id ? posts.filter((post) => post.userId === id) : posts;

  return (
    <div className="posts">
      {filteredPosts.map((post) => (
        <Post
          post={post}
          key={post.id}
          postLikes={post.postLikes}
          postTime={post.time}
        />
      ))}
    </div>
  );
};

export default Posts;
