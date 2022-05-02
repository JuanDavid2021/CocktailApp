import React, {createContext, useEffect, useState} from 'react'
import axios from "axios"

export const ModalContext = createContext()

export const ModalProvider = (props) => {
  
  const [idreceta, setIdReceta] = useState() 
  const [receta, setReceta] = useState({})


  useEffect(()=>{
     const obtenerDetalle = async()=>{
        if(!idreceta) return;
        else{
          const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
          const detalle = await axios.get(url)
          setReceta(detalle.data.drinks[0])
        }
     }
  },[idreceta])
    return (
    <ModalContext.Provider
     value={{
        setIdReceta
     }}
    >
     {props.children}
    </ModalContext.Provider>
  )
}
