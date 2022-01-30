import { useParams } from "react-router-dom";

function Profesor(){
    const { id } = useParams()
    console.log('id_alumno ... '+id)

    return (
        <p>
            Pagina individual de: .. {id}
        </p>
    )
}

export default Profesor;