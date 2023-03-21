import React, { useContext } from 'react'
import Movielist from '../../Component/movielist/Movielist';
import { DataContext } from '../../context/dataContext';
import "./WishList.css"
import { Link } from "react-router-dom";

const WishList = () => {
    const { likedMovies } = useContext(DataContext);
    console.log(likedMovies);
  return (
    <div className='wlContainer'>
        {likedMovies.length ? 
            <Movielist movieObj={likedMovies}/>
            : <div className='wrapper'>
                <span>No movies added to yout Watchlist.</span>
                <Link style={{textDecoration: "none"}}  to="/">
                  <button>Visit Movies</button>
                </Link>
            </div>
        }
    </div>
  )
}

export default WishList
