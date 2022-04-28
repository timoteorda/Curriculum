import React from 'react'
import {Link} from 'react-router-dom'

const FinalMain = () => {
  return (
    <>
        <div className='subPresentacion'>
            <h2 className='otrasHabilidades'>Otras habilidades:</h2>
            <div className='habilidades'>
                <h4 className='habilidad'>Inglés</h4>
                <img src="../img/cincoEstrellas.png" alt="" />
            </div>
            <div className='habilidades'>
                <h4 className='habilidad'>Trabajo en equipo</h4>
                <img src="../img/cincoEstrellas.png" alt="" />
            </div>
            <div className='botonesMain'>
                <Link to='/misProyectos'><button className='botonMain'>MIS PROYECTOS</button></Link>
                <Link to='/contacto'><button className='botonMain'>CONTACTAME</button></Link>
            </div>
        </div>
    </>
  )
}

export default FinalMain