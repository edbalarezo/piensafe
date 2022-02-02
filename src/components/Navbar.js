import './Navbar.css';
import { NavLink } from "react-router-dom";
export default function Navbar (){

return (
    <ul>
        <li>
            <NavLink to={"/cards"} className="navlink">
                Profesores
            </NavLink>
        </li>
        <li>
            <NavLink to={"/usuarios"} className="navlinks">
                Usuarios
            </NavLink>
        </li> 
    </ul>
);

}