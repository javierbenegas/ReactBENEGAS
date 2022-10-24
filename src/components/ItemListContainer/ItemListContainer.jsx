import React from 'react'
import "./itemlistcontainer.css";

function ItemListContainer(props) {
  return (
    <div>
        <h1 className='textstyle'>{props.greeting}</h1>
    </div>
  )
}

export default ItemListContainer