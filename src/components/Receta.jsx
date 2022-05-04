import React, {useContext, useState} from 'react'
import { ModalContext } from './context/ModalContext'




export const Receta = ({receta}) => {



const {instrucciones,setInstrucciones, setIdReceta} = useContext(ModalContext)
console.log(instrucciones)
const busq = (e)=>{
e.preventDefault()
setIdReceta(receta.idDrink)
}

const ingredients = (instrucciones)=>{
 
let arrayIngredients = []

  for(let i=0; i<16; i++){
    if(instrucciones[`strIngredient${i}`]){
      arrayIngredients.push(
        <li>{instrucciones[`strIngredient${i}`]} {instrucciones[`strMeasure${i}`]}</li>
      )
    }
  }
  return arrayIngredients
}

return (
<div className='col-md-4 bt-3'>
  <div className='card'>
      <h2 className='card-header'>{receta.strDrink}</h2>
      <img src={receta.strDrinkThumb} className='card-img-top'></img> 
  </div>

 
<button type="submit" 
  className="btn btn-primary" 
  data-bs-toggle="modal" 
  data-bs-target="#exampleModal"
  onClick={busq}
  >
  Ver Receta
</button>
  

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-center" id="exampleModalLabel">{instrucciones.strDrink}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <h5 className='text-center'> Ingredients: </h5> 
            {ingredients(instrucciones)}
            <h5 className='text-center'> Instructions: </h5> 
            {instrucciones.strInstructions}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</div>
  )
}
