function AlumnoList(props){
    return(
        <table>
        <thead >
          <tr>
            <th >id_alumno</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Fecha de Nacimiento</th>
          </tr>
        </thead>
        <tbody>
        
            {props.children}
        
            </tbody>
      </table>
    );
    }
    
    export default AlumnoList; 