import React from 'react'
import Button from "../Button/Button";
import "./item.css";

function Item(props) {
    return (
        <div className='card'>

            <div className='card-img'>
            <img src={props.imgurl} alt="Product img" />
            </div>
            <div className='card-detail'>
                <h5>{props.brand}</h5>
                <p>{props.model}</p>
                <p>{props.km} km</p>
                <p>$ {props.price}</p>
                <h4 className='priceTag'>$ {props.price} </h4>
            </div>
            <Button>Consultar</Button>
        </div>
    );
  }

export default Item