import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
<header>
  <nav className='navbar navbar-expand-lg bg-body-tertiary'>
    <div className='container-fluid'>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to="/inicio" isActive={({isActive}) => isActive ? "active" : null}>Inicio</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to="/portafolio" isActive={({isActive}) => isActive ? "active" : null}>Portafolio</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink className='nav-link' to="/curriculum" isActive={({isActive}) => isActive ? "active" : null}>Curriculum</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to="/contacto" isActive={({isActive}) => isActive ? "active" : null}>Contacto</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  )
}

