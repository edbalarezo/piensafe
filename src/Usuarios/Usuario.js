
function Usuario (props){
    return (
        <tr>
            
        <th>{props.itemUsuario.id}</th>
        <th>{props.itemUsuario.username}</th>
        <th>{props.itemUsuario.password}</th>
        <th>{props.itemUsuario.status}</th>

        </tr>
    )
}
 export default Usuario