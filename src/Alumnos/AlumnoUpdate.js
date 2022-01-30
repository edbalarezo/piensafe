import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdAlumno, updateAlumno } from './service/AlumnoService';
import './Alumno.css'

function AlumnoPage() {
  
    const { alumnoId } = useParams();
    const [alumno, setAlumno] = useState({nombre:'',apellido1:'',apellido2:'',discapacidad_fisica:'',telefono:''});
  
    const onSubmit = (event) => {
      event.preventDefault();
      updateAlumno(alumno);
    }
    const onChange = (event) =>{
        if(event.target.name==='nombre')
        setAlumno({...alumno,nombre:event.target.value}) 
        if(event.target.name==='apellido1')
        setAlumno({...alumno,apellido1:event.target.value}) 
        if(event.target.name==='apellido2')
        setAlumno({...alumno,apellido2:event.target.value})     
      if(event.target.name==='discapacidad_fisica')    
        setAlumno({...alumno,discapacidad_fisica:event.target.value})
      if(event.target.name==='telefono')
        setAlumno({...alumno,telefono:event.target.value})
    }
  
    useEffect(() => {    
      findByIdAlumno(alumnoId).then(data => {
        setAlumno(data);  
      }
      );
    }, [alumnoId]);
  
    return (
      <div className="boxUpdate">
        <form onSubmit={onSubmit} className="boxFormUpdate">
        <h2>Actulizar Alumno</h2>
    
            <input 
            className="formUpdateInput"
              name="nombre"
              placeholder="Nombre" 
              value={alumno.nombre}
              onChange={onChange}
     
            />
    
            <input 
             className="formUpdateInput"
             placeholder="Apellido1" 
              name="apellido1"
              value={alumno.apellido1}
              onChange={onChange}
            />
          
            <input 
             className="formUpdateInput"
             placeholder="Apellido2"
              name="apellido2"
              value={alumno.apellido2}
              onChange={onChange}
            />

            <input 
             className="formUpdateInput"
             placeholder="Discapacidad_fisica"
              name="Apellido2"
              value={alumno.apellido2}
              onChange={onChange}
            />
            
            <input 
             className="formUpdateInput"
             placeholder="Telefono"
              name="telefono"
              value={alumno.telefono}
              onChange={onChange}
            />
          <button type="submit" className="formUpdateBtn">Guardar</button>
  
        </form>
        
      </div>
    );
  }
  
  export default AlumnoPage;