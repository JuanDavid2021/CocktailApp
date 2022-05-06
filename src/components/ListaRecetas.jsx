import React, {useContext} from 'react'
import {RecetasContext} from './context/RecetasContext'
import { Receta } from './Receta'



export const ListaRecetas = () => {
    
  const {recetas} = useContext(RecetasContext)

  return (
    <div className='row'>
    { recetas===null? <h1 className='text-center m-5'>No se encontraron resultados de la búsqueda</h1> : recetas ==="error"? <h1 className='text-center'>Por favor ingrese una busqueda por nombre y/o categoría</h1>
    : recetas?.map(r=>(
      <Receta key={r.idDrink } receta={r}/>
  ))}
    </div>
  )
}
