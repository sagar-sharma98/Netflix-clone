import React, { useState } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase-auth";
import { Link, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import BackgroundImage from "../components/BackgroundImage";
import ErrorModal from "../modal/ErrorModal";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };


  const handleLogIn = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            'projectId': 'exn9j6ivl5cz',
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name : data.name,
            email : data.email,
            password : data.password,
            appType : "ott",
          }),
        }
      );
      const result = await response.json();
      console.log(result.data);
      console.log(result);
      localStorage.setItem("netflixusertoken", result.token);
     
      navigate("/login");
    } catch (error) {
      console.log(error);
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
                name="name"
                placeholder="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                value={data.email}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={data.password}
                onChange={(e) => handleChange(e)}
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
