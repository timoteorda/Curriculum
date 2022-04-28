import React from 'react'

const Contacto = () => {
  return (
    <div className='contenedorContacto'>
      <div className='iconosContacto'>
        <h1 className='tituloRedes'>Acerca de mi:</h1>
          <div className='rowInformacion'>
            <img src="../img/nombre.png" alt="Icono Persona" />
            <h4 className='informacionPersonal'>Timoteo Ruiz de Arcaute</h4>
          </div>
          <div className='rowInformacion'>
            <img src="../img/edad.png" alt="Icono Edad" />
            <h4 className='informacionPersonal'>Edad: 25 años</h4>
          </div>
          <div className='rowInformacion'>
            <img src="../img/mapa.png" alt="Icono Ubicacion" />
            <h4 className='informacionPersonal'>La Plata, Buenos Aires, Argentina</h4>
          </div>
          <div className='estudiosContacto'>
            <div>
                <img className='iconoEstudio' src="../img/estudios.png" alt="Icono Estudios" />
            </div>
            <div>
                <ul className='listaEstudios'>
                  <li className='textoLiEstudios'>Licenciatura En Sistemas, Universidad Nacional de La Plata. En curso.</li>
                  <li className='textoLiEstudios'>Front-End Developer. CoderHouse. Finalizado.</li>
                  <li className='textoLiEstudios'>Licenciatura en Turismo. Universidad Nacional de La Plata. Finalizado.</li>
                </ul>
            </div>
          </div>
      </div>
      <div className='iconosContacto'>
        <h2 className='tituloRedes'>Mis redes:</h2>
        <div className='rowRedes'>
            <a href="https://www.linkedin.com/in/timoteoruizdearcaute/" target="_blank"><img src="../img/linkedin.png" alt="Icono Linkedin" /></a>
            <a className='visitaRed' href="https://www.linkedin.com/in/timoteoruizdearcaute/" target="_blank">
            <h4>Visitá mi LinkedIn!</h4></a>
        </div>
        <div className='rowRedes'>
          <a href="mailto:timoteorda@gmail.com?Subject=Curriculum%20recibido%20!"><img src="../img/gmail.png" alt="Icono Gmail"/></a>
          <a className='visitaRed' href="mailto:timoteorda@gmail.com?Subject=Curriculum%20recibido%20!"><h4>Enviame un mensaje!</h4></a>
        </div>
        <div className='rowRedes'>
          <a href="https://github.com/timoteorda" target="_blank"><img src="../img/githubContacto.png" alt="Icono WhatsApp"/></a>
          <a className='visitaRed' href="https://github.com/timoteorda" target="_blank"><h4>Conocé mis proyectos!</h4></a>
        </div>
      </div>
    </div>
  )
}

export default Contacto

