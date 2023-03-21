import React, { useContext } from 'react'
import Genrelist from '../../Component/genrelist/Genrelist';
import Movielist from '../../Component/movielist/Movielist'
import Pagelist from '../../Component/pagelist/Pagelist';
import { DataContext } from '../../context/dataContext';
import "./Genre.css"

const Genre = () => {
  const { trendingMovies, activePage, setActivePage, totalPage } = useContext(DataContext);

  return (
    <div className='genre'>
      <Genrelist />
      <div className='subGenre'>
        <Movielist movieObj={trendingMovies}/>
        <Pagelist activePage={activePage} setActivePage={setActivePage} totalPage={totalPage}/>
      </div>
    </div>
  )
}

export default Genre
