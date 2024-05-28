import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { SlMagnifier, SlBell } from "react-icons/sl";
import { GoTriangleDown } from "react-icons/go";
import { Login, loginAuth } from "../App";

function Navbar() {
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const {state} = useContext(loginAuth);

  const inputHandler = (event) => {
    setValue(event.target.value);
  }

  const searchHandler = (event) => {
    console.log(event); 
    setSearch(true);
    setValue()
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
            src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
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
        <div className="right_nav_container">
          {search ? (<div className="search_container">
            <SlMagnifier color="white" size={22} style={{padding: "4px", fontWeight: "bold"}}/>
            <input
              type="search"
              id="search_input"
              value={value}
              onChange={inputHandler}
              placeholder="Titles, people, genres"
            />
          </div>) : (<SlMagnifier color="white" size={22}  onClick={searchHandler}/>) }
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
