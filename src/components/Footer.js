import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
        <div className='footer'>
          <div className='containerLinksFooter'>
              <Link className='tituloFooter' to='/'>INICIO</Link>
              <Link className='tituloFooter' to='/misProyectos'>MIS PROYECTOS</Link>
              <Link className='tituloFooter'to='/contacto'>CONTACTO</Link>
          </div>
        </div>
        <div className='subFooter'>
          <h4 className='derechos'> © Todos los derechos reservados. Timoteo Ruiz de Arcaute 2022</h4>
        </div>
    </>

  )
}

export default Footer