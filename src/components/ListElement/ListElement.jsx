import React from 'react'

function ListElement(props) {
  return (
            <li className="nav-item"> 
            <a className="nav-link active" aria-current="page" href="/">{props.children}</a>
            </li>
  )
}

export default ListElement