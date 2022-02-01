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
      <h2 className="titulo">Lista de Alumnos</h2>
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

function UsuarioPage() {

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    
    getListUsuario().then(data => {
      setUsuario(data);
    }
    );

  }, []);

  return (
    <div>
      <h2 className="titulo">Lista de Usuarios</h2>
      <Link to='/createusuarios' >
        Crear
      </Link>
      <UsuarioList>
        {
          usuario.map(item =>
            <Usuario   
              key={item.id}
              itemUsuario={item} />
          )
        }
      </UsuarioList>
    </div>
  );
}

export default AlumnoPage;
export default UsuarioPage;