import React, { useContext, useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase-auth";
import { Link, useNavigate } from "react-router-dom";
import { loginAuth, LoginSuccess } from "../App";
import { MdClose } from "react-icons/md";
import BackgroundImage from "../components/BackgroundImage";
import ErrorModal from "../modal/ErrorModal";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(loginAuth);
  const navigate = useNavigate();

  const modalBtnHandler = () => {
    setError(false);
  }
  
  const handleLogIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      dispatch(LoginSuccess(true));
      alert("login success");
      navigate("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  const iconHandler = () => {
    navigate("/");
  };

  return (
    <>
      <BackgroundImage />
      <div className="loginContent">
        <div className="form-wrapper">
          {/* <MdClose size={30} color="white" /> */}

          <div className="form">
            <div className="title">
              <h1>login</h1>
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
              <button onClick={handleLogIn}>{!loading ? "Login" : "Loading..."}</button>
            </div>
            <Link to="/signup">Create a new account</Link>
          </div>
        </div>
      </div>
      {error && <ErrorModal  text="Enter the correct email and password, or go to signup" closeErrorModal={modalBtnHandler} />}
    </>
  );
}

export default Login;
