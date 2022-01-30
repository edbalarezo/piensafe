import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ProfesoresPage from './profesores/ProfesoresPage';
import AlumnoPage from "./Alumnos/AlumnoPage";
import AlumnorCreate from "./Alumnos/AlumnoCreate";
import AlumnoUpdate from "./Alumnos/AlumnoUpdate";
import Profesor from './profesores/Profesor';
import Navbar from "./components/Navbar";

function App () {

    return (
        
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/cards" element={<AlumnoPage />} />
          <Route path="/profesores" element={ <ProfesoresPage />   }/>         
          <Route path="/profesor" element={ <Profesor />   }/>                 
          <Route path="/createalumno" element={ <AlumnorCreate />   }/>   
          <Route path="/updatealumno/:alumnoId" element={ <AlumnoUpdate />   }/>   
          
        </Routes>
  
      </BrowserRouter>   
    );
  }
  
  export default App;


