import React, { useContext, useState } from 'react'
import { CategoriasContext } from './context/CategoriasContext'
import { RecetasContext } from './context/RecetasContext'


export const Formulario = () => {

  const {categorias} = useContext(CategoriasContext) 
  const {setBusqueda,setConsultar} = useContext(RecetasContext)

  const [input, setInput] = useState({
    nombre:"",
    categoria:""
  })

  const handleInputChange =(e)=>{
    console.log(input)
   setInput({
     ...input,
     [e.target.name] : e.target.value
   })
  }
  return (
   <form className='col-12'
    onSubmit ={e=>{
      e.preventDefault()
      setBusqueda(input)
      setConsultar(true)
    }}
   >
       <div className='text-center'>
           <h1>Busca bebidas por categoría o ingredientes</h1>
       </div>

       <div className='row align-items-center justify-content-md-evenly'>
             <div className='col-md-4'>
             <input
              type="text"
              placeholder="Busca por ingrediente"
              className='form-control m-5'
              name="nombre"
              onChange={handleInputChange}
             >  
             </input>
             </div>

             
             <div className='col-md-4'>
               <select
               name="categoria"
               className='form-control'
               onChange={handleInputChange}
               >
                 <option value="">--Selecciona Categoría--</option>   
                 {categorias.map(b=>(
                <option key={b.strCategory} value={b.strCategory}>{b.strCategory} </option>   
                 ))}
               </select>
               </div>

               <div className='col-md-4'>
                  <input
                   value="Buscar Recetas"
                   type="submit"
                   className='btn btn-block btn-danger'
                  />
            </div>     
       </div>
   </form>
  )
}
