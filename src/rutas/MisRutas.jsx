import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Contacto } from "../components/Contacto";
import { Curriculum } from "../components/Curriculum";
import { Inicio } from "../components/Inicio";
import { Portafolio } from "../components/Portafolio";
import { Footer } from '../components/layout/Footer';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Proyecto } from '../components/proyecto';


export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/**HEADER Y NAVEGACION */}
          <HeaderNav />
        {/**CONTENIDO CENTRAL*/}
        <section className='content'>
        <Routes>
            <Route exact path='/' element={<Inicio/>} />
            <Route path='/inicio' element={<Navigate to="/" />} />
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
