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
        <UsuarioList>
          {
            usuario.map(item =>
              <Usuario   
                key={item.id}
                itemUsuario={item} />
            )
          }
        </UsuarioList>
      </div>
    );
  }

  export default UsuarioPage;