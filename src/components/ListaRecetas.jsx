import React, {useContext} from 'react'
import {RecetasContext} from './context/RecetasContext'
import { Receta } from './Receta'


export const ListaRecetas = () => {
    
  const {recetas} = useContext(RecetasContext)
 
  return (
    <div className='row'>
       {recetas.map(r=>(
           <Receta key={r.idDrink } receta={r}/>
       ))}
    </div>
  )
}
