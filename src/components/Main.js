import React from 'react'
import Contacto from './Contacto'
import { Route, Routes } from 'react-router-dom'
import PaginaMain from './PaginaMain'
import MisProyectos from './MisProyectos'

const Main = () => {

    return (
            <main>               
            <Routes>
                <Route path="/" element={<PaginaMain/>} />
                <Route path="/misProyectos" element={<MisProyectos/>} />
                <Route path="/contacto" element={<Contacto/>} />
            </Routes>
            </main>
    )
}

export default Main