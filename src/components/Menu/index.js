import React from 'react';
import{Link} from 'react-router-dom'
import Logo from '../../assests/img/Logo.png';
import './Menu.css';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo da LetteringBrasilFlix"/>
            </Link>
            <Link as={Link} className="ButtonLink"to="/cadastro/video">Novo vídeo</Link>
        </nav>
    )

}

export default Menu;