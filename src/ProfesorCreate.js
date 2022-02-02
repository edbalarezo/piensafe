import React, { useState } from "react";
import { createprofesor } from './service/ProfesorService'

function ProfesorPage () {

    const [idprofesor, setIdprofesor] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const obj ={
            idprofesor: idprofesor,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
        }
        createprofesor(obj)
    }

    const onChange = (event) => {
    if(event.target.name==='idprofesor')
    {
    setIdprofesor(event.target.value)  
    }
    
    if(event.target.name==='nombre')
    setNombre(event.target.value)

    if(event.target.name==='apellido')
    setApellido(event.target.value)

    if(event.target.name==='telefono')
    setTelefono(event.target.value)
    
}


return ( 
    <div>
    <h2 className="titulo"> REGISTRAR DOCENTES DE LA UNIVERSIDAD NACIONAL DE EDUCACIÓN "UNAE</h2>
    <form onSubmit={onSubmit}>

    <label className="label">
    Id
    <input 
    name="idprofesor"
    value={idprofesor}
    onChange={onChange}
    />
    </label>

   <label className="label">
    Nombres
    <input
    name="nombre"
    value={nombre}
    onChange={onChange}
    />
    </label>

    <label className="label">
    Apellidos
    <input 
    name="apellido"
    value={apellido}
    onChange={onChange}
    />
    </label>
    <label className="label">
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
    export default ProfesorPage;