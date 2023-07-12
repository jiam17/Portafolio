import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
        <span>J</span>
        <h3>Jonathan alfaro - web</h3>
        </div>
        <nav>
            <ul>
                <li>
                <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : null}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio">Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/servicio">Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum">Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
