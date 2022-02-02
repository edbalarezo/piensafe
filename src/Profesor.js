import './Profesor.css'

function Profesor (props){
    return (
        <tr>
            
        <th>{props.itemProfesor.idprofesor}</th>
        <th>{props.itemProfesor.nombre}</th>
        <th>{props.itemProfesor.apellido}</th>
        <th>{props.itemProfesor.telefono}</th>

        </tr>
    )
}

export default Profesor;