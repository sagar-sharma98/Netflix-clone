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
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(loginAuth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };


  const modalBtnHandler = () => {
    setError(false);
  }
  
  const handleLogIn = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
        method: "POST",
        headers: {
          'projectId': 'exn9j6ivl5cz',
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
  
          email : loginData.email,
          password : loginData.password,
          appType : "ott",
        }),
      })
      const result = await response.json();
      console.log(result);
      dispatch(LoginSuccess(true));
      localStorage.setItem("netflixusertoken", result.token);
     
     
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
              <h1>Login</h1>
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
                name="email"
                placeholder="email"
                value={loginData.email}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={loginData.password}
                onChange={(e) => handleChange(e)}
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
