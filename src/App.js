import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import ProfesorPage from './ProfesorPage';
import ProfesorCreate from './ProfesorCreate';
import UsuarioPage from './Usuarios/UsuarioPage';
import Usuario from './Usuarios/Usuario';
import Navbar from "./components/Navbar"



function App(){
  return (

    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/cards" element={<ProfesorPage />} />
        <Route path="/usuarios" element={ <UsuarioPage />   }/>         
        <Route path="/usuarios" element={ <Usuario />   }/>                 
        <Route path="/createprofesor" element={ <ProfesorCreate />   }/>   
       
      </Routes>

      </BrowserRouter>   
  );
}

export default App;


