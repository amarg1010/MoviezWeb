import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider =({children})=>{

    const [trendingMovies, setTrandingMovies] = useState([]);
    const [likedMovies, setLikedMovies] = useState(JSON.parse(localStorage.getItem("movieFavList")) || []);
    const [activePage, setActivePage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [section, setSection] = useState("trending");
    const [genreId, setGenreId] = useState([]);
    const [search, setSearch] = useState("");

    
    let url = `https://api.themoviedb.org/3/trending/all/day?api_key=90ad27246998a8472a3195ea67cb3bda&page=${activePage}`;
    useEffect(()=>{
      if(section === "trending"){
        url = `https://api.themoviedb.org/3/trending/all/day?api_key=90ad27246998a8472a3195ea67cb3bda&page=${activePage}`;
      }else if(section === "movies"){
        url = `https://api.themoviedb.org/3/search/movie?api_key=90ad27246998a8472a3195ea67cb3bda&language=en-US&query=${search ? search : "a"}&page=${activePage}&include_adult=false`;
      }else if(section === "genre"){
        url = `https://api.themoviedb.org/3/discover/movie?api_key=90ad27246998a8472a3195ea67cb3bda&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${activePage}&with_genres=${genreId.join(',')}`;
      }

        // console.log("dataContex useEffect is running with ", search);
      fetch(url).then((r)=> r.json())
        .then((res)=>{
            // console.log(res.results);
            // setTotalPage(Math.min(Math.ceil(res.total_results/20), 10));
            setTotalPage(Math.min(res.total_pages, 10));
            setTrandingMovies(res.results);
        })
    }, [activePage, section, genreId, search]);


    return <DataContext.Provider value={{trendingMovies, setTrandingMovies,
        totalPage, activePage, setActivePage, setSection, genreId, setGenreId,
        search, setSearch, likedMovies, setLikedMovies}}>
          {children}
    </DataContext.Provider>
}