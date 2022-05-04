import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import React from "react";
import CategoriasProvider from "./components/context/CategoriasContext";
import RecetasProvider from "./components/context/RecetasContext";
import { ListaRecetas } from "./components/ListaRecetas";
import { ModalProvider } from "./components/context/ModalContext";


function App() {
  return (

     <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
      <div>
        <Header/>
      </div>

      <div className="container mt-5">
        <div className="row">
            <Formulario/>
        </div> 
          <ListaRecetas/>
      </div>
      </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider> 
  );
}

export default App;
