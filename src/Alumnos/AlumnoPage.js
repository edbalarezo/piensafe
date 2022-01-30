import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlumnoList from "./AlumnoList";
import Alumno from "./Alumno";
import { getListAlumno } from './service/AlumnoService'

function AlumnoPage() {

  const [alumno, setAlumno] = useState([]);

  useEffect(() => {
    
    getListAlumno().then(data => {
      setAlumno(data);
    }
    );

  }, []);

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <Link to='/createalumno' >
        Crear
      </Link>
      <AlumnoList>
        {
          alumno.map(item =>
            <Alumno   
              key={item.id}
              itemAlumno={item} />
          )
        }
      </AlumnoList>
    </div>
  );
}

export default AlumnoPage;