function ProfesorList(props){
    return ( 
        <table>
    <thead >
      <tr>
        <th >Id</th>
        <th>Nombres</th>
        <th>Apellidos</th>
        <th>Numero de teléfono</th>
      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default ProfesorList