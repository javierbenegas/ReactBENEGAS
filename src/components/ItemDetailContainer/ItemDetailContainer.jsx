import React,{useState, useEffect}  from 'react';
import { getSingleItemFromAPI } from "../../mockService/mockService";


function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getSingleItemFromAPI().then((itemsDB) => {
            setProduct(itemsDB);
        });
    }, []);

  return (
    <div>
        <div className='card-img'>
            <img src={product.imgurl} alt="Product img" />
        </div>
        <div className='card-detail'>
            <h5>{product.brand}</h5>
            <p>{product.model}</p>
            <p>{product.km} km</p>
            <p>$ {product.price}</p>
            <h4 className='priceTag'>$ {product.price} </h4>
        </div>
    </div>
  );
}

export default ItemDetailContainer