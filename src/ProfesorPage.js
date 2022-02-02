import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfesorList from "./ProfesorList";
import Profesor from "./Profesor";
import { getListprofesor } from './service/ProfesorService'

function ProfesorPage() {
    
    const [profesor, setProfesor] = useState([]);

    useEffect(() => {
        getListprofesor().then(data => {
            setProfesor(data);
        }
        );
    }, []);

    return (
        <div>
            <h2 className="titulo2"> PROFESORES REGISTRADOS DE LA "UNAE</h2>
            <Link to ='/createprofesor'>
            <h2 className="registrar"> crear </h2>   
            </Link>

        <ProfesorList>
        {
          profesor.map(item =>
            <Profesor
            key={item.idprofesor}
            itemProfesor={item}/>
            )
            }
    </ProfesorList>
    </div>
    );
}
    
export default ProfesorPage;