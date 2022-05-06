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

           if(nombre.length>0 && categoria.length>0){
               
               const nameSearch = nombre.toLowerCase() 
               const nameCocktail = nameSearch.replace(nameSearch[0], nameSearch[0].toUpperCase())
           
               const obtenerRecetas =async()=>{
               
               const urlCategoria = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`
               const recetasCategoria = await axios.get(urlCategoria)
   
               if(recetasCategoria.data.drinks.length>1){
                  const resultCategoria = recetasCategoria.data.drinks
                  var resultFinal = resultCategoria.filter(c=>c.strDrink.includes(nameCocktail))
                  if(resultFinal.length>0){
                     setRecetas(resultFinal)
                     
                  }else{
                     setRecetas(null)
                     
                  }
               }
            }
            obtenerRecetas()    
           }

         else if(!nombre && !categoria){
            setRecetas("error")
           }

         else if(nombre.length>0 && categoria.length<1){

               const nameSearch = nombre.toLowerCase() 
               const nameCocktail = nameSearch.replace(nameSearch[0], nameSearch[0].toUpperCase())
           
               const obtenerRecetas =async()=>{
               
               const urlName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameCocktail}`
               const recetasCategoria = await axios.get(urlName)
               if(recetasCategoria.data.drinks!==null){
                  setRecetas(recetasCategoria.data.drinks)
                  
               }else{
                  setRecetas(null)
                  
               }
            }
            obtenerRecetas()    
         }

         else if(nombre.length<1 && categoria.length>0){
            
            const obtenerRecetas =async()=>{
               
               const urlCategoria = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`
               const recetasCategoria = await axios.get(urlCategoria)
               if(recetasCategoria.data.drinks.length>1){
                  setRecetas(recetasCategoria.data.drinks)
                  
               }else{
                  setRecetas(null)
                  
               }
            }
            obtenerRecetas()   
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
