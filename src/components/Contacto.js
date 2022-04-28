import React from 'react'

const Contacto = () => {
  return (
    <div className='contenedorContacto'>
      <div className='iconosContacto'>
        <h2 className='tituloRedes'>Mis redes:</h2>
        <div className='rowRedes'>
            <a href="https://www.linkedin.com/in/timoteoruizdearcaute/" target="_blank"><img src="../img/linkedin.png" alt="Icono Linkedin" /></a>
            <a className='visitaRed' href="https://www.linkedin.com/in/timoteoruizdearcaute/" target="_blank">
            <h4>Visitá mi LinkedIn!</h4></a>
        </div>
        <div className='rowRedes'>
          <a href="https://api.whatsapp.com/send?phone=2215590814 & text=Hola!" target="_blank"><img src="../img/whatsapp.png" alt="Icono WhatsApp"/></a>
          <a className='visitaRed' href="https://api.whatsapp.com/send?phone=2215590814 & text=Hola, Timoteo!" target="_blank"><h4>Enviame un mensaje!</h4></a>
        </div>
        <div className='rowRedes'>
          <a href="https://github.com/timoteorda" target="_blank"><img src="../img/github.png" alt="Icono WhatsApp"/></a>
          <a className='visitaRed' href="https://github.com/timoteorda" target="_blank"><h4>Visitá mi Github!</h4></a>
        </div>
      </div>
      <div>
        FORM ACA
      </div>
    </div>
  )
}

export default Contacto