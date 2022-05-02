import { createContext, useState, useEffect } from "react";
import axios from "axios"

export const CategoriasContext = createContext() 

const CategoriasProvider = (props)=>{

const [categorias, setCategorias] = useState([])

 useEffect(()=>{

  const getCategories = async()=>{
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const categoriasApi = await axios(url)
    setCategorias(categoriasApi.data.drinks)
  } 
  getCategories()
 }, [])

 return(
   <CategoriasContext.Provider
   value={{
     categorias 
   }} 
   >
    {props.children}
   </CategoriasContext.Provider>
 )
}
export default CategoriasProvider;