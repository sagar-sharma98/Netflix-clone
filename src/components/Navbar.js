import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { SlMagnifier, SlBell } from "react-icons/sl";
import { GoTriangleDown } from "react-icons/go";
import { Login, loginAuth } from "../App";

function Navbar() {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const {state} = useContext(loginAuth);

  const searchHandler = (event) => {
    console.log(event); 
    setSearch(true);
    event.stopPropagation();
    
  };

  const removeInputHandler = (e) => {
    if(e.target.className !== "search_container"){
      setSearch(false);
    }
    return;
  }

  const profileHandler = () => {
    if(state.login){
      navigate("/logout");
    }
    else{
      navigate("/login");
    }
    
  }
  return (
    <div className="navbar_container" onClick={removeInputHandler}>
      <div className="left_container">
        <div className="image_container">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
            alt="logo"
            width={"130px"}
            height={"74px"}
          />
        </div>
        <div className="list_container">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/">TV Shows</NavLink>
            </li>
            <li>
              <NavLink to="/">New & Popular</NavLink>
            </li>
            <li>
              <NavLink to="/">My List</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="right_container">
        <div className="right_nav_container">
          {search ? (<div className="search_container">
            <SlMagnifier color="white" size={22} style={{padding: "4px", fontWeight: "bold"}}/>
            <input
              type="search"
              id="search_input"
              placeholder="Titles, people, genres"
            />
          </div>) : (<SlMagnifier color="white" size={22} onClick={searchHandler} />) }
          <NavLink>Children</NavLink>
          <SlBell color="white" size={22}></SlBell>
          <div className="profile_logo">
            <img
              id="logo_image"
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
              width={"40px"}
              alt="profile_logo"
              onClick={profileHandler}
            />
            <GoTriangleDown color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
