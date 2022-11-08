import React from 'react'
import {Link} from "react-router-dom"

function ListElement(props) {
  return (
            <li className="nav-item"> 
            <Link className="nav-link active" aria-current="page" to="/">{props.children}</Link>
            </li>
  )
}

export default ListElement