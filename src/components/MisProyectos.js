import React from 'react'
import CarouselWhaikau from './CarouselWhaikau'
import CarouselLucidi from './CarouselLucidi'

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
            <div className='proyecto'>
            <div>
                <h2 className='tituloProyecto'>Lucidi Y Moreno SA ©</h2>
                <p className='explicacionProyecto'>Este proyecto representa el sitio web de la PYME Lucidi Y Moreno SA. La misma ofrece una amplia variedad de motores eléctricos, entre otros y variedad de servicios para la reparación de los mismos.</p>
            </div>
            <div className='carouselWhaikau'><CarouselLucidi/></div>
            <a href="https://lucidiymoreno.vercel.app/" target='_blank'><button className='botonProbarProyecto'>Probalo vos mismo!</button></a>
        </div>
        </div>
        <h3 className='finalProyectos'>Mas proyectos serán presentados a la brevedad!</h3>
    </>
  )
}

export default MisProyectos