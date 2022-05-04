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

          if(nombre & categoria===undefined){
            const obtenerRecetas =async()=>{

               const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`
               const recetas = await axios.get(url)
               if(recetas.data.drinks===null){
                  setRecetas(null)
               }else{
                  setRecetas(recetas.data.drinks)
               } 
            }
            obtenerRecetas()                
          } 
          else if(!nombre & !categoria) setRecetas("error");
          else {
            const obtenerRecetas2 =async()=>{
               const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
               const recetas = await axios.get(url)
               setRecetas(recetas.data.drinks)
            }
            obtenerRecetas2()   
          }  
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
