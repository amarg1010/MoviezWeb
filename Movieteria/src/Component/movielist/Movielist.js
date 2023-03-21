import React, { useContext } from 'react'
import Movie from '../movie/Movie'
import "./Movielist.css"


const Movielist = ({movieObj}) => {
  // console.log("movies list", movieObj);

  return (
    <div className='movieList'>
      {movieObj.length ? movieObj.map((element, i)=>{
        return <Movie key={i} movieData={element}/>
      })
        : <h2>No Movies found.</h2>
        }
    </div>
  )
}

export default Movielist
