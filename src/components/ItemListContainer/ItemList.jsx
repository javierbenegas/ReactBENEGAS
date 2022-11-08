import React from 'react'
import Item from '../Item/Item'

function itemList(props) {
  return (
    <div>
    {props.productsList.map((product) => (
        <Item
          key={product.id}
          brand={product.brand}
          model={product.model}
          km={product.km}
          stock={product.stock}
          fuel={product.fuel}
          price={product.price}
          imgurl={product.imgurl}
        />
      ))}
    </div>
  )
}

export default itemList