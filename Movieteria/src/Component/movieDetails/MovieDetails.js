import React, { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import "./MovieDetails.css"
import { SmContext } from '../../context/smContext';

const MovieDetails = () => {
    const { setShowdetails } = useContext(SmContext);
    const { movieData, castData, videoData } = useContext(SmContext);

    const {poster_path : poster, release_date:date, title, runtime, genres, overview, 
        name, original_name: oName, vote_average:rating, id  } = movieData;
    const {cast} = castData;

    const playTrailer =()=>{
    if (videoData === null) {
      window.open(`https://www.youtube.com/results?search_query=${title || name || oName} trailer`, "_blank");
    } else {
      window.open(`https://www.youtube.com/watch?v=${videoData}`, "_blank");
    }
  }

  return (
    <div className='mdContainer'>
        <div className='mdWrapper'>
            <div className='left'>
                <div className='photo'>
                    <img src={poster? `https://image.tmdb.org/t/p/w300/${poster}`
                        : 'https://www.movienewz.com/img/films/poster-holder.jpg'}/>
                </div>
                <div className='trailer' onClick={playTrailer}>
                    <YouTubeIcon className='ytIcon'/>
                    <span>Watch Trailer</span>
                </div>
            </div>
            <div className='right'>
                <div className='title'>{title || name || oName}</div>
                <div className='info'>
                    <div className='date'>{date && date.split("-").reverse().join("-")}</div>
                    <div className='length'>{runtime && `${Math.floor(runtime/60)} Hours and ${runtime%60} Minutes`}</div>
                </div>
                <div className='genreList'>
                    {genres && genres.map((e, i)=><div>{e.name}</div>)}
                </div>
                <div className='rating'>Rating: <span>★</span>{rating && rating.toFixed(1)}</div>
                <div className='desc'>{overview}</div>
                <hr/>
                <div className='actors'>
                    {cast?.slice(0,4).map((actor, i)=>{
                        return <div key={i} className='items'>
                            <div className='photo'>
                                <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                                        : "https://media.istockphoto.com/id/531302789/photo/no-image-available.jpg?s=1024x1024&w=is&k=20&c=68WHeYvNElybjqyb2AKAp7-x2i5jDdT2oNqvfpfJAH4="}/>
                            </div>
                            <div className='name'>{actor.name || actor.original_name}</div>
                        </div>
                    })}
                </div>
            </div>
            <span className='close' onClick={()=>{setShowdetails(false)}}><CloseIcon/></span>
        </div>
    </div>
  )
}

export default MovieDetails


// const movieData = {
//     adult: false,
//     backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
//     genre_ids: (3) [878, 12, 28],
//     id: 76600,
//     media_type: "movie",
//     original_language: "en",
//     original_title: "Avatar: The Way of Water",
//     overview: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
//     popularity: 17043.61,
//     poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//     release_date: "2022-12-14",
//     title: "Avatar: The Way of Water",
//     video: false,
//     vote_average: 8.027,
//     vote_count: 1475,
// }
// const obj = {
//     adult: false,
//     backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
//     genre_ids: (3) [878, 12, 28],
//     id: 76600,
//     media_type: "movie",
//     original_language: "en",
//     original_title: "Avatar: The Way of Water",
//     overview: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
//     popularity: 17043.61,
//     poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//     release_date: "2022-12-14",
//     title: "Avatar: The Way of Water",
//     video: false,
//     vote_average: 8.027,
//     vote_count: 1475,
// }