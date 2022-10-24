import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart }  from "@fortawesome/free-solid-svg-icons";


function CardWidget() {
  return (
    <FontAwesomeIcon icon={ faShoppingCart } className="nav-link active"/>
  )
}

export default CardWidget