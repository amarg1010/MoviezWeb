import React, { useContext, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css"
import { DataContext } from '../../context/dataContext'
import { ThemeContext } from '../../context/themeContext'
import { CallMissed } from '@mui/icons-material';

let timeOutId;
const Navbar = () => {
  const [mobileMode, setMobileMode] = useState(true);
  const [serachValue, setSearchValue] = useState("");
  const { setActivePage, setSection, setSearch, likedMovies } = useContext(DataContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  
  const searching = (input)=>{
    setSearchValue(input);

    if(timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(()=>{
      setSearch(input);
    }, 500)
  }

  const handleClick =(section)=>{
    if(section=== "trending" || section === "genre") setSearchValue("");
    setSection(section);
    setActivePage(1);
  }
  
  return (
    <div className='navbar'>
      <div className='left' >
        <span >Movies</span>
        <span className='nbCounter'>
          <span>{likedMovies.length ? likedMovies.length : ""}</span>
          <Link style={{textDecoration: "none"}} to="/wishList">
            <FavoriteOutlinedIcon className='heartIcon' /></Link>
        </span>

        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={()=>{setDarkMode(!darkMode)}} />
        ) : (
          <DarkModeOutlinedIcon onClick={()=>{setDarkMode(!darkMode)}} />
        )}

        <span className='menu'><MenuIcon 
            onClick={()=>{setMobileMode(!mobileMode)}}/></span>
      </div>
      {mobileMode && <>
        <div className='center' >
          <NavLink style={{textDecoration: "none"}}  to="/search">
            <div className='search'
              onClick={()=>{handleClick("movies")}}>
              <SearchIcon/>
              <input 
                  value={serachValue} 
                  onChange={(e)=>{searching(e.target.value)}}
                  placeholder='Enter movie name'/>
            </div>
          </NavLink>
        </div>
        <div className='right' >
          <ul>
            <NavLink style={{textDecoration: "none"}} to="/">
              <li onClick={()=>{handleClick("trending")}}>Trending</li>
            </NavLink>
            <NavLink style={{textDecoration: "none"}}  to="/search">
              <li onClick={()=>{handleClick("movies")}}>Movies</li>
            </NavLink>
            <NavLink style={{textDecoration: "none"}}  to="/genre">
              <li  onClick={()=>{handleClick("genre")}}>Genre</li>
            </NavLink>
          </ul>
        </div>
      </>}
    </div>
  )
}

export default Navbar

