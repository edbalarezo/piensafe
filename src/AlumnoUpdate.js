import React, {useState, useEffect} from "reac";
import { useParams } from "react-router-dom";
import { findById_alumnos, updateAlumnos } from './service/AlumnoService'
import './Alumno.css'

function AlumnoCreate(){

    const {alumnosId} = useParams();
    const [alumnos, setAlumnos] = useState({nombre:'',apellidos:'',fecha_nac:''});
    
    const onSubmit = (event) => { 
        event.preventDefault();
        updateAlumnos(alumnos);
    }

    const onChange = (event) => { 
        if(event.target.name==='nombre')
        setAlumnos({...alumnos,nombre:event.target.value})
        if(event.target.name==='apellidos')
        setAlumnos({...alumnos,apellidos:event.target.value})
        if(event.target.name==='fecha_nac')
        setAlumnos({...alumnos,fecha_nac:event.target.value})
    }

    useEffect(() => {
        findById_alumnos(alumnosId).then(data =>{
            setAlumnos(data);
        }
        );
    }, [alumnosId]);

    return (
        <div className="boxUpdate">
           <form onSubmit={onSubmit} className="boxUpdate">
           <h2>Actualizar Alumno</h2> 

           <input
           className="formUpdateInput"
             name="nombre"
             placeholder="Nombre"
             value={alumnos.nombre}
             onChange={onChange}
           /> 

           <input
           className="formUpdateInput"
             name="Apellidos"
             placeholder="apellidos"
             value={alumnos.apellidos}
             onChange={onChange}
           />

           <input
           className="formUpdateInput"
             name="Fecha_na"
             placeholder="fecha_nac"
             value={alumnos.fecha_nac}
             onChange={onChange}
           />  
 
            <button type="submit" className="formUpdateBtn">Guardar</button>
               
        </form> 
        </div> 
    );
}

export default AlumnoCreate;