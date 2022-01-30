function AlumnoList(props){
    return(
        <table>
        <thead >
          <tr>
            <th >Id</th>
            <th>Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
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