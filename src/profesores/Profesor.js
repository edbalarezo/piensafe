import { useParams } from "react-router-dom";

function Profesor(){
    const { id_alumno } = useParams()
    console.log('id_alumno ... '+id_alumno)

    return (
        <p>
            Pagina individual de: .. {id_alumno}
        </p>
    )
}

export default Profesor;