import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { SlMagnifier, SlBell } from "react-icons/sl";
import { GoTriangleDown } from "react-icons/go";
import { Login, loginAuth } from "../App";
import ErrorModal from "../modal/ErrorModal";

function Navbar() {
  const [hover, setHover] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const {state} = useContext(loginAuth);
  const ref = useRef(null);

  const inputHandler = (event) => {
    setValue(event.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const search = ref.current.value;
    console.log(search);
    navigate(`searchpage/${search}`);
  }

  const profileHandler = () => {
    if(state.login){
      navigate("/logout");
    }
    else{
      navigate("/login");
    } 
  }

  const imageClickHandler = () => {
    navigate("/");
  }

  return (<>
    <div className="navbar_container" >
      <div className="left_container">
        <div className="image_container">
          <img
            src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
            alt="logo"
            width={"130px"}
            height={"74px"}
            cursor="pointer"
            onClick={imageClickHandler}
          />
        </div>
        <div className="list_container">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/tvshows">TV Shows</NavLink>
            </li>
            <li>
              <NavLink to="/popular">New & Popular</NavLink>
            </li>
            <li>
              <NavLink to="/mylist">My List</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="right_container">
        <div className="right_nav_container" >
          {hover ? (<form className="search_container"  onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} onSubmit={submitHandler}>
            
            <input
              type="search"
              id="search_input"
              value={value}
              ref={ref}
              onChange={(e) => inputHandler(e)}
              placeholder="Titles, people, genres"
            />
          </form>) : (<SlMagnifier color="white" size={22}  onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}/>) }
         
          <SlBell color="white" size={22} onClick={() => setError(true)} cursor="pointer"></SlBell>
          <div className="profile_logo">
            <img
              id="logo_image"
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              width={"40px"}
              alt="profile_logo"
              onClick={profileHandler}
            />
            <GoTriangleDown color="white"  onClick={() => setError(true)}/>
          </div>
        </div>
      </div>
    </div>
    {error && <ErrorModal text="Sorry, work in progress." closeErrorModal={() => setError(false)}/>}
    </>
  );
}

export default Navbar;
