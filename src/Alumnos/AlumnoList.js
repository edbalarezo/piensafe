function AlumnoList(props){
    return(
        <table>
        <thead >
          <tr>
            <th >Id</th>
            <th>Nombre</th>
            <th>Apellido1</th>
            <th>Apellido2</th>
            <th>Discapacidad Física</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        
            {props.children}
        
            </tbody>
      </table>
    );
    }
    
    export default AlumnoList