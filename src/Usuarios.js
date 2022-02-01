
function Usuarios(props){

    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.username}</td>
            <td>{props.password}</td>
            <td>{props.status}</td>

        </tr>


    );
}

export default Usuarios