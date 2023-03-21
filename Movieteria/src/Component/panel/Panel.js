import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext';
import "./Panel.css"

const Panel = () => {
    const { trendingMovies } = useContext(DataContext);
  return (
    <>
      {(trendingMovies?.length > 10) ? 
        <div className='panel'>
            <div className='container'>
                {trendingMovies.map((element, i)=>{
                  if(element.poster_path){
                    return <img key={i} src={`https://image.tmdb.org/t/p/w300/${element.poster_path}`} alt="Movie images"/>
                  }
                })}
          </div>
        </div>
      : <></>}
    </>
  )
}

export default Panel
