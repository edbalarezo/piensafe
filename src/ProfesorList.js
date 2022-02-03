function ProfesorList(props){
    return ( 
        <table>
    <thead >
      <tr>
        <th className="x"  >Id</th>
        <th className="x" >Nombres</th>
        <th className="x" >Apellidos</th>
        <th className="x" >Numero de teléfono</th>
      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default ProfesorList