function UsuarioPage() {

    const [usuario, setUsuario] = useState([]);
  
    useEffect(() => {
      
      getListUsuario().then(data => {
        setUsuario(data);
      }
      );
  
    }, []);
  
    return (
      <div>
        <h2 className="titulo">Lista de Usuarios</h2>
        <Link to='/createusuarios' >
          Crear
        </Link>
  
        <UsuariosList>
          {
            usuario.map(usuarios =>
              <Usuarios   
                key={usuarios.id} id={usuarios.id} username={usuarios.username} password={usuarios.password} status={usuarios.status}/>
            )
          }
        </UsuariosList>
      </div>
    );
  }

  export default UsuarioPage;