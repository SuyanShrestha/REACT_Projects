import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>मेरो Nexus.</h1>
          <p>
            Join the excitement and start connecting with friends, sharing
            memories, and discovering new experiences! Let's get started by
            creating your account.
          </p>
          <span>Do you have an account?</span>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
