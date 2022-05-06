import React, { useContext, useState } from 'react'
import { CategoriasContext } from './context/CategoriasContext'
import { RecetasContext } from './context/RecetasContext'
import "./Formulario.css"

export const Formulario = () => {

  const {categorias} = useContext(CategoriasContext) 
  const {setBusqueda,setConsultar} = useContext(RecetasContext)
  const {recetas} = useContext(RecetasContext)
  console.log(recetas)
  const [input, setInput] = useState({
    nombre:"",
    categoria:""
  })

  const handleInputChange =(e)=>{

   setInput({
     ...input,
     [e.target.name] : e.target.value
   })
  }
  return (
     <div className='fondo3'>
    {
      recetas===null?
      <form className='col-12 fondo2'
      onSubmit ={e=>{
        console.log("input del formulario",input)
        e.preventDefault()
        setBusqueda(input)
        setConsultar(true)
      }}
     >
         <div className='text-center'>
             <h1>Busca cockteles por nombre o por categoria</h1>
         </div>
  
         <div className='row align-items-center searchbar'>
               <div className='col-md-4'>
               <input
                type="text"
                placeholder="Busca por nombre de cockteles"
                className='form-control m-5'
                name="nombre"
                onChange={handleInputChange}
               >  
               </input>
               </div>
  
               
               <div className='col-md-4'>
                 <select
                 name="categoria"
                 className='form-control m-5'
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
                     className='btn btn-block btn-danger m-5'
                    />
              </div>     
         </div>
     </form> :
      recetas.length>0?
      <form className='col-12 fondo'
      onSubmit ={e=>{
        console.log("input del formulario",input)
        e.preventDefault()
        setBusqueda(input)
        setConsultar(true)
      }}
     >
         <div className='text-center'>
             <h1>Busca cockteles por nombre o por categoria</h1>
         </div>
  
         <div className='row align-items-center searchbar'>
               <div className='col-md-4'>
               <input
                type="text"
                placeholder="Busca por nombre de cockteles"
                className='form-control m-5'
                name="nombre"
                onChange={handleInputChange}
               >  
               </input>
               </div>
  
               
               <div className='col-md-4'>
                 <select
                 name="categoria"
                 className='form-control m-5'
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
                     className='btn btn-block btn-danger m-5'
                    />
              </div>     
         </div>
     </form>  :
        <form className='col-12 fondo2'
        onSubmit ={e=>{
          console.log("input del formulario",input)
          e.preventDefault()
          setBusqueda(input)
          setConsultar(true)
        }}
       >
           <div className='text-center'>
               <h1>Busca cockteles por nombre o por categoria</h1>
           </div>
    
           <div className='row align-items-center searchbar'>
                 <div className='col-md-4'>
                 <input
                  type="text"
                  placeholder="Busca por nombre de cockteles"
                  className='form-control m-5'
                  name="nombre"
                  onChange={handleInputChange}
                 >  
                 </input>
                 </div>
    
                 
                 <div className='col-md-4'>
                   <select
                   name="categoria"
                   className='form-control m-5'
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
                       className='btn btn-block btn-danger m-5'
                      />
                </div>     
           </div>
       </form>
    }
     </div>


  )
}
