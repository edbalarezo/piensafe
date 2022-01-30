import React, { useState } from "react"
import {createalumnos} from './service/AlumnoService'

function AlumnoPage() {

    const [id_alumno, setId_alumno] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [fecha_nac, setFecha_nac] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const obj = {
            id_alumno: id_alumno,
            nombre: nombre,
            apellidos: apellidos,
            fecha_nac: fecha_nac
        }
        createalumnos(obj)
    }

    const onChange = (event) => {
    if(event.target.name==='id_alumno')
    {
        setId_alumno(event.target.value)
    }
    if(event.target.name==='nombre')
        setNombre(event.target.value)

    if(event.target.name==='apellidos')
        setApellidos(event.target.value)

    if(event.target.name==='fecha_nac')
        setFecha_nac(event.target.value)
}

return ( 
    <div>
    <h2 className="titulo"> REGISTRO DE ALUMNOS CON SINDROME DE DOWN </h2>
    <form onSubmit={onSubmit}>
    <label>
    Id 
    <input
    className="datos"
    name="id_alumno"
    value={id_alumno}
    onChange={onChange}
    />
    </label>
    <label>
    Nombre
    <input
    className="datos"
    name="nombre"
    value={nombre}
    onChange={onChange}
    />
    </label>
    <label>
    Apellidos 
    <input
    className="datos"
    name="apellidos"
    value={apellidos}
    onChange={onChange}
    />
    </label>
    <label>
    Fecha de Nacimiento 
    <input
    className="datos"
    name="fecha_nac"
    value={fecha_nac}
    onChange={onChange}
    />
    </label>

    <button type="submit">Guardar</button>

    </form>
    </div>
);
}
    export default AlumnoPage;