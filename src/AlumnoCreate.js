import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import AlumnoList from './AlumnoList';
import Alumno from './Alumno'
import { getListalumnos } from './service/AlumnoService'

function AlumnoCreate(){
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        
        getListalumnos().then(data => {
            setAlumnos(data);
        }
        );
    },[]);

    return (
        <div>
             <h2>Lista de Alumnos</h2>
             <Link to='/createalumnos'>
                 Crear
             </Link>
            <AlumnoList>
                {
                    alumnos.map(item =>
                        <Alumno
                        key={item.id_alumno} 
                        itemAlumno={item} />
                    )
                }
            </AlumnoList>
        </div>
    );
}

export default AlumnoCreate;