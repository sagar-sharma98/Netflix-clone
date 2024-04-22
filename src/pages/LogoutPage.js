import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./LogoutPage.css";
import { signOut } from "firebase/auth";
import { firebaseAuth } from '../firebase-auth';
import { LoginSuccess, loginAuth } from '../App';

export default function LogoutPage() {
    const { dispatch } = useContext(loginAuth);
    const navigate = useNavigate();
    const handleLogIn = () => {
        dispatch(LoginSuccess(false));
        signOut(firebaseAuth);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    }
  return (
    <>
      <div className="loginContent">
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h1>Are you sure you want to log out?</h1>
            </div>
            <div className="container">
              
              <button className="login-btn" onClick={handleLogIn}>Logout</button>
            </div>
            <Link to="/">Go to home page</Link>
          </div>
        </div>
      </div>
    </>
  )
}
