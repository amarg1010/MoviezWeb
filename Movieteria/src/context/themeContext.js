import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider =({children})=>{
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("movieDarkMode")) || false
      );

      useEffect(() => {
        localStorage.setItem("movieDarkMode", darkMode);
      }, [darkMode]);
    

    return <ThemeContext.Provider value={{darkMode, setDarkMode}}>
          {children}
    </ThemeContext.Provider>
}