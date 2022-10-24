import React from 'react'
import ListElement from "./ListElement/ListElement";
import CardWidget from './CardWidget/CardWidget';
import "./navbar.css"

function NavBar() {
  return (
    <>
        <div className=''>
            <nav className='navbar navbar-dark navbar-expand-lg navbar-light navbar-modificada'>
                <div class="container-fluid">
                    <img src="/img/auto_icono.png" alt="" className="imagen-navbar"/>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <ListElement>Inicio</ListElement>
                            <ListElement>Catalogo</ListElement>
                            <ListElement>Financiación</ListElement>
                            <ListElement>Contacto</ListElement>
                            <CardWidget/>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default NavBar