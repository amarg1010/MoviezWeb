import { createContext, useContext, useEffect, useState } from "react";

export const SmContext = createContext();
const myKey = "90ad27246998a8472a3195ea67cb3bda";

export const SmContextProvider =({children})=>{
    const [showDetails, setShowdetails] = useState(false);
    const [movieId, setMovieId] = useState();
    const [movieData, setMovieData] = useState({});
    const [videoData, setVideoData] = useState(null);
    const [castData, setCastData] = useState([]);

    function findKeyinVideo (res){
        for(let v of res.results){
            if(v.name.includes("Trailer")){
                setVideoData(v.key);
                break;
            }else{
                setVideoData(null);
            }
        }
    }

    useEffect(()=>{    
        // console.log("smContext useEffect running");
      let dataurl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${myKey}&language=en-US`;
      let videourl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${myKey}&language=en-US`;
      let casturl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${myKey}&language=en-US`;
      fetch(dataurl).then((r)=> r.json())
        .then((res)=>{
            // console.log(res);
            setMovieData(res);
        })

        fetch(videourl).then((r)=> r.json())
        .then((res)=>{
            // console.log(res);
            findKeyinVideo(res);

        })

        fetch(casturl).then((r)=> r.json())
        .then((res)=>{
            // console.log(res);
            setCastData(res);
        })

    },[movieId])

    return <SmContext.Provider value={{showDetails, setShowdetails, setMovieId, movieData, castData, videoData }}>
          {children}
    </SmContext.Provider>
}




