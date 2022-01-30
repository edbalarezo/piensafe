import { Link } from 'react-router-dom';
import './Alumno.css'

function Alumno (props){
    return(
        <tr >
            <td> {props.itemAlumno.id_alumno} </td>
            <td> {props.itemAlumno.nombre} </td>
            <td> {props.itemAlumno.apellidos} </td>
            <td> {props.itemAlumno.fecha_nac} </td>
            <td><Link to={`/updatealumnos/${props.itemAlumno.id_alumno}`}>Edit</Link></td>
        </tr>
    )
}

export default Alumno;