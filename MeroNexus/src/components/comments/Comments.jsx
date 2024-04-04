import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/AuthContext";

const Comments = () => {
  // aafai comment write garna lai aba aafno info linuparyo
  const { currentUser } = useContext(AuthContext);

  // fake comments data aaile lai
   const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Shristi Shrestha",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Alex Wang",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a comment." />
        <button>Send</button>
      </div>

      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
