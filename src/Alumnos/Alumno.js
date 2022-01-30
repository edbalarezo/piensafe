import { Link } from 'react-router-dom';
import './Alumno.css'

function Alumno(props){
   
return(
    <tr > 
        <td>{props.itemAlumno.id}</td>        
        <td> {props.itemAlumno.nombre} </td>
        <td> {props.itemAlumno.apellido1} </td>
        <td> {props.itemAlumno.apellido2} </td>
        <td>{props.itemAlumno.discapacidad_fisica}</td>        
        <td> {props.itemAlumno.telefono} </td>
        <td><Link to={`/updatealumno/${props.itemAlumno.id}`}>Edit</Link></td>

    </tr>
);

}
export default Alumno