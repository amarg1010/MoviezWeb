import React, { useContext } from 'react'
import Movielist from '../../Component/movielist/Movielist'
import Pagelist from '../../Component/pagelist/Pagelist'
import Panel from '../../Component/panel/Panel'
import { DataContext } from '../../context/dataContext'

const Home = () => {
  const { trendingMovies, activePage, setActivePage, totalPage } = useContext(DataContext);
  return (
    <div>
      <Panel/>
      <Movielist movieObj={trendingMovies}/>
      <Pagelist activePage={activePage} setActivePage={setActivePage} totalPage={totalPage}/>
    </div>
  )
}

export default Home
