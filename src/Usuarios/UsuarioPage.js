import React, { useState, useEffect } from "react";
import UsuarioList from "./UsuarioList";
import Usuario from "./Usuario";
import { createusuario, getListusuario } from "../service/ProfesorService";

function UsuarioPage (){
    const [usuario, setUsuario] = useState([]);

    const [id, setId] = useState ('');
    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');
    const [status, setStatus] = useState ('');

    const onSubmit = (event) => {
        event.preventDefault();
        const objeto = {
            id: id,
            username: username,
            password: password,
            status: status
        }
        createusuario(objeto)
    }

    const onChange = (event) => {
        if(event.target.name==='id')
        {
            setId(event.target.value)
        }
        if(event.target.name==='username')
        setUsername(event.target.value)

        if(event.target.name==='password')
        setPassword(event.target.value)

        if(event.target.name==='status')
        setStatus(event.target.value)
    }

    useEffect(() => {
        getListusuario().then(data => {
            setUsuario(data);
        }
        );
    }, []);

    return (
        <div>
         <h2 className="titulo3">REGISTRAR USUARIOS</h2>  
         <form onSubmit={onSubmit}>
         <label className="label">
             Id
             <input
             name="id"
             value={id}
             onChange={onChange}
             />
        </label>
         
        <label className="label">
            Username
             <input
             name="username"
             value={username}
             onChange={onChange}
             />
         </label>

         <label className="label">
            Password
             <input 
             name="password"
             value={password}
             onChange={onChange}
             />
         </label>

         <label className="label">
            Status
             <input 
             name="status"
             value={status}
             onChange={onChange}
             /> 
         </label>

             <button type="submit">Guardar</button>

             </form>    

             <h2 className="titulo2"> USUARIOS REGISTRADOS</h2>
            
            

             <UsuarioList>
        {
          usuario.map(item =>
            <Usuario
            key={item.id}
            itemUsuario={item}
            />
            )
            }
    </UsuarioList>

        </div>

    );
}

 export default UsuarioPage