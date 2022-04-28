import React from 'react'
import CarouselWhaikau from './CarouselWhaikau'

const MisProyectos = () => {
  return (
    <>
        <h1 className='tituloPaginaProyectos'>Mis Proyectos</h1>
        <div className='proyecto'>
            <div>
                <h2 className='tituloProyecto'>Whaikau ©</h2>
                <p className='explicacionProyecto'>Este proyecto representa el e-Commerce de la marca de ropa de dos emprendedores, llamada Whaikau. Se creó una pagina accesible con el usuario para que pueda acceder facilmente a la compra de productos online.</p>
            </div>
            <div className='carouselWhaikau'><CarouselWhaikau/></div>
            <a href="https://whaikau.vercel.app/" target='_blank'><button className='botonProbarProyecto'>Probalo vos mismo!</button></a>
        </div>
    </>
  )
}

export default MisProyectos