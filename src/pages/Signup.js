import React, { useState } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase-auth";
import { Link, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import BackgroundImage from "../components/BackgroundImage";
import ErrorModal from "../modal/ErrorModal";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const handleLogIn = async () => {
    setLoading(true);
    try {
      const userDetails = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      console.log(userDetails);
      localStorage.setItem("token", userDetails.user.accessToken);
      localStorage.setItem("user", JSON.stringify(userDetails.user));
      navigate("/login");
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const modalBtnHandler = () => {
    setError(false);
  }
  const iconHandler = () => {
    navigate("/");
  };

  return (
    <>
      <BackgroundImage />
      <div className="loginContent">
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h1>Signup</h1>
              <MdClose
                className="icon"
                color="white"
                size={30}
                onClick={iconHandler}
              />
            </div>
            <div className="container">
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogIn}>{!loading ? "Signup" : "Loading..."}</button>
            </div>
            <Link to="/login">Already have an account</Link>
          </div>
        </div>
      </div>
      {error && <ErrorModal  text="Please enter the correct details." closeErrorModal={modalBtnHandler} />}
    </>
  );
}

export default Signup;
