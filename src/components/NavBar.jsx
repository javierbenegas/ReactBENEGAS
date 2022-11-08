import React from 'react'
// import ListElement from "./ListElement/ListElement";
// import CardWidget from './CardWidget/CardWidget';
import "./navbar.css"
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <>
        <div className=''>
        <nav class="navbar navbar-dark navbar-expand-lg navbar-light navbar-modificada">
        <div class="container-fluid">
          {/* <Link to="/"><img class="imagen-navbar" src="/img/auto_icono.png" alt="Icono de la marca"></Link> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="./index.html">Inicio</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Catálogo
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="./pages/nuevos.html">0 km</Link></li>
                  <li><Link class="dropdown-item" to="./pages/usados.html">Usados</Link></li>              
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="./pages/financiacion.html">Financiación</Link>
              </li>
              <li class="nav-item">
                <Link to="./pages/contacto.html" class="nav-link">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    </>
  )
}

export default NavBar