import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Inicio } from "../components/Inicio";
import { Contacto } from "../components/Contacto"
import { Curriculum } from "../components/Curriculum"
import { Portafolio } from "../components/Portafolio"
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto } from '../components/proyecto';


export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/**HEADER Y NAVEGACION */}
          <HeaderNav />
        {/**CONTENIDO CENTRAL*/}
        <section className='content'>
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/proyecto/:id' element={<Proyecto/>} />
            <Route path='/curriculum' element={<Curriculum/>} />
            <Route path='/portafolio' element={<Portafolio/>} />
            <Route path='*' element={
            <div className='pages'>
               <h1 className='heading'>Error 404</h1>
          </div>
            } />

        </Routes>
        </section>


        {/**FOOTER */}
        <Footer />

    </BrowserRouter>
  )
}
