import React from 'react'

const PresentacionMain = () => {
  return (
    <div className='presentacion'>
      <div className='informacionTimoteo'>
          <h1 className='nombreTitulo'>Timoteo Ruiz de Arcaute</h1>
          <h4 className='frontEnd'>Front-End Developer</h4>
          <div className='infoPersonal'>
            <h2>Acerca de mi:</h2>
            <p className='parrafoPresentacion'>Mi nombre es Timoteo. Tengo 25 años y soy Licenciado en Turismo. En el año 2021 me inserté en el ambito del desarrollo web y de la programación llevando a cabo un curso de Front-End Developer. </p>
            <p className='parrafoPresentacionDos'>Ya, en 2022 y gracias al interés que me genero dicho curso decidí ingresar en la carrera de Licenciatura en Sistemas, la cual me encuentro cursando actualmente.</p>
            <p className='parrafoPresentacionDos'>Actualmente me encuentro en busqueda de mi primera experiencia laboral en el ámbito del desarrollo web.</p>
          </div>
      </div>
      <div>
          <img className='fotoTimoteo' src="../img/fotoTimoteo.jpeg" alt="Foto Timoteo" />
      </div>
    </div>
  )
}

export default PresentacionMain