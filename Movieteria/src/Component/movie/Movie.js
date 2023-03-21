import React, { useContext, useState } from 'react'
import "./Movie.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { DataContext } from '../../context/dataContext'
import MovieDetails from '../movieDetails/MovieDetails';
import { SmContext } from '../../context/smContext';

const Movie = ({movieData}) => {

  const {poster_path : poster, release_date:date, title,
     name, original_name: oName, vote_average:rating, id  } = movieData;

     const { setShowdetails, setMovieId } = useContext(SmContext);

  const { likedMovies, setLikedMovies } = useContext(DataContext);

  let movieIdList = likedMovies.map((e)=>e.id)
  
  const removeMovie = (e)=>{
    e.stopPropagation();
    setLikedMovies([...likedMovies.filter((e)=>(e.id !== id))]);
    localStorage.setItem("movieFavList", JSON.stringify([...likedMovies.filter((e)=>(e.id !== id))]));
  }
  const addMovie =(e)=>{
    e.stopPropagation(); 
    setLikedMovies([...likedMovies, movieData]);
    localStorage.setItem("movieFavList", JSON.stringify([...likedMovies, movieData]));
  }
  const showMovieDeatils =()=>{
    setMovieId(id);
    setShowdetails(true)
  }

  return (
    <div className='singleMovie' onClick={()=>{showMovieDeatils()}}>
      <div className='upside'>
        <img src={poster? `https://image.tmdb.org/t/p/w300/${poster}`
                  : 'https://www.movienewz.com/img/films/poster-holder.jpg'} alt="Movie images"/>

        {date && <span className='date'>{date.slice(0,4)}</span>}

          {movieIdList.includes(id) ? <span className='showIcon' onClick={(e)=>{removeMovie(e)}}>
            <FavoriteOutlinedIcon className='heartIcon' /></span>
            : <span className='hideIcon' onClick={(e)=>{addMovie(e)}}>
              <FavoriteBorderOutlinedIcon className='heartIcon'/></span>}

      </div>
      <div className='downside'>
          <div className='left'>{title || name || oName}</div>
          <div className='right'>
          <StarOutlinedIcon style={{fontSize: "20px"}}/>
            <span>{rating ? rating.toFixed(1) : "N/A" }</span>
          </div>
      </div>
    </div>
  )
}

export default Movie
