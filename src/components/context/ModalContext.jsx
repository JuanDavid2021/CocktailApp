import React, {createContext, useEffect, useState} from 'react'
import axios from "axios"

export const ModalContext = createContext()

export const ModalProvider = (props) => {
  
  const [idreceta, setIdReceta] = useState() 
  const [instrucciones, setInstrucciones] = useState({})
 
 console.log(idreceta)

  useEffect(()=>{
     const obtenerDetalle = async()=>{
        if(!idreceta) return;
        else{
          const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
          const detalle = await axios.get(url)
          const total = detalle.data.drinks[0]
          console.log(total)
         setInstrucciones(total)
        }
      }
      obtenerDetalle()
  },[idreceta])
    return (
    <ModalContext.Provider
     value={{
      instrucciones,
      setInstrucciones,
      setIdReceta
     }}
    >
     {props.children}
    </ModalContext.Provider>
  )
}
