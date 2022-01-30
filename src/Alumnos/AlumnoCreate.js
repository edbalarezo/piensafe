import React, { useState } from "react";
import { createAlumno } from './service/AlumnoService'

function AlumnoCreate() {

    const [nombre, setNombre] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [discapacidad_fisica, setDiscapacidad_fisica] = useState('');
    const [telefono, setTelefono] = useState('');
  
    const onSubmit = (event) => {
      event.preventDefault();
      const objeto = {
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        discapacidad_fisica: discapacidad_fisica,
        telefono: telefono,
      }
      createAlumno(objeto)
  
    }
  
    const onChange = (event) =>{
      if(event.target.name==='nombre')
      {
      setNombre(event.target.value)
      }
      if(event.target.name==='apellido1')
      setApellido1(event.target.value)

      if(event.target.name==='apellido2')
      setApellido2(event.target.value)
  
      if(event.target.name==='discapacidad_fisica')
      setDiscapacidad_fisica(event.target.value)

      if(event.target.name==='telefono')
      setTelefono(event.target.value)
    }
  
    return (
      <div>
        <h2>Crear Alumnos</h2>
        <form onSubmit={onSubmit}>
          <label>
            Nombre
            <input 
              name="nombre"
              value={nombre}
              onChange={onChange}
            />
          </label>
          <label>
            Apellido1
            <input 
              name="apellido1"
              value={apellido1}
              onChange={onChange}
            />
          </label>
          <label>
            apellido2
            <input 
              name="apellido2"
              value={apellido2}
              onChange={onChange}
            />
          </label>
          <label>
            Discapacidad Fisica
            <input 
              name="discapacidad_fisica"
              value={discapacidad_fisica}
              onChange={onChange}
            />
          </label>
          <label>
            Telefono
            <input 
              name="telefono"
              value={telefono}
              onChange={onChange}
            />
          </label>
  
          <button type="submit">Guardar</button>
        </form>
      </div>
    );
  }
  
  export default AlumnoCreate;