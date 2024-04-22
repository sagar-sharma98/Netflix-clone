import React, { useContext, useState } from "react";
import "./Login.css";
import {
  signInWithEmailAndPassword
} from "firebase/auth";
import { firebaseAuth } from "../firebase-auth";
import { Link, useNavigate } from "react-router-dom";
import { loginAuth, LoginSuccess } from "../App";
import { MdClose } from "react-icons/md";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useContext(loginAuth);
  const handleLogIn = async() => {

    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      dispatch(LoginSuccess(true));
     alert("login success");
     navigate("/");

   } catch (error) {
     alert("Email or Password is envalid, try to enter correct email and password or go to the signup");
     console.log(error);
   }
  };

  const iconHandler = () => {
    navigate("/");
  }

  return (  
    <>
      <div className="loginContent">
        <div className="form-wrapper">
          {/* <MdClose size={30} color="white" /> */}
        
          <div className="form">
          
            <div className="title">
            
              <h1>login</h1>
              <MdClose className="icon" color="white" size={30} onClick={iconHandler}/>
            </div>
            <div className="container">
              <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button onClick={handleLogIn}>login</button>
            </div>
            <Link to="/signup">Create a new account</Link>
          </div>
        </div>
      </div>
    </>
  );
}



export default Login;
