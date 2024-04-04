import React from 'react'
import './user.scss'

const User = () => {
  return (
    <div className="user">
    <div className="userInfo">
        <img
        src="https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-1/329251366_5743483905747862_7853108977902782179_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oZvndMPpEZYAX9tCw4y&_nc_ht=scontent.fktm1-1.fna&oh=00_AfCyL09wV_769U3m5fxlHRdeWGvurOlx2jHPzeAfeBPhew&oe=65FC4AFB"
        alt=""
        />
        <div className="online"></div>
        <span>Shristi Koju</span>
    </div>
    </div>
  );
}

export default User
