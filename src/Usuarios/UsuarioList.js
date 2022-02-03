function UsuarioList(props){
    return ( 
        <table className="tabla2">
    <thead >
      <tr>
        <th className="x" >Id</th>
        <th className="x" >Username</th>
        <th className="x" >Password</th>
        <th className="x" >Status</th>
      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default UsuarioList