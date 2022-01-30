import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import ProfesorPage from './profesores/ProfesoresPage'
import AlumnoCreate from "./AlumnoCreate"
import AlumnoUpdate from './AlumnoUpdate';
import Profesor from './profesores/Profesor';
import Navbar from "./components/Navbar"

function App () {

  return (

    <BrowserRouter>
    <Navbar />
        <Routes>
        <Route path="/cards" element={<AlumnoCreate />} />
        <Route path="/profesores" element={<ProfesorPage />} />
        <Route path="/profesor" element={<Profesor />} />
        <Route path="/createalumnos" element={ <AlumnoCreate />   }/>   
        <Route path="/updatealumnos/:alumnoId" element={ <AlumnoUpdate />   }/>   
        
      </Routes>

    </BrowserRouter>   
  );
}

export default App;


