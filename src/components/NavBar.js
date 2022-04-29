import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
            <header>
                <div className='navBar'>
                    <div className='navegacion'>
                      <div>
                          <Link to="/"><img className='logoTimoteo' src="../img/logoTimoteo.png" alt="logo" /></Link>
                      </div> 
                      <div>
                        <ul className='ulNav'>
                          <div>
                          <Link to="/" className='dropbtn'>INICIO</Link>
                          </div>                        
                          <div className='dropdown'>
                          <Link to="/misProyectos" className='dropbtn'>PROYECTOS</Link>                
                          </div>
                          <div>
                          <Link to='/contacto' className='dropbtn'>CONTACTO</Link>   
                          </div>                        
                        </ul>    
                      </div>                

                    </div>
                </div>    
            </header>
    )
}

export default NavBar