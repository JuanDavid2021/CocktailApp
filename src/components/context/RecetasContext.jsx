import React, { createContext, useState, useEffect } from "react";
import axios from "axios"


export const RecetasContext = createContext()


const RecetasProvider =(props)=>{


    const [recetas, setRecetas] = useState([])
    const [consultar, setConsultar] = useState(false)
    const [busqueda, setBusqueda] = useState({
       nombre:'',
       categoria: '' 
    })
    
    const {nombre, categoria} = busqueda

    useEffect(()=>{
       if(consultar){
           const obtenerRecetas =async()=>{
           const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
           const recetas = await axios.get(url)
           setRecetas(recetas.data.drinks)
        }
        obtenerRecetas()   
       }
    }, [busqueda])
   return(
       <RecetasContext.Provider
       value={{
        recetas,  
        setBusqueda,
        setConsultar
       }}
       >
        {props.children}  
       </RecetasContext.Provider>
   ) 

}

export default RecetasProvider;
