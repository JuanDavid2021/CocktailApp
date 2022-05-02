import React, {useContext, useState} from 'react'
import { ModalContext } from './context/ModalContext'




export const Receta = ({receta}) => {


const {setIdReceta} = useContext(ModalContext)

return (
<div className='col-md-4 bt-3'>
  <div className='card'>
      <h2 className='card-header'>{receta.strDrink}</h2>
      <img src={receta.strDrinkThumb} className='card-img-top'></img> 
  </div>

  <button
   type="submit"
   className='btn btn-block btn-primary'
   onClick={(e)=>{setIdReceta(receta.strDrink)}}
  >
   Ver receta
  </button>
</div>
  )
}
