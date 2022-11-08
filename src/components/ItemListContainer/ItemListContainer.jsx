import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import getItemsFromAPI from '../../mockService/mockService';
import FlexWrapper from '../FlexWrapper/FlexWrapper';


function ItemListContainer() {
  let [productsList, setProductList] = useState([]);

  useEffect(() => {
    getItemsFromAPI().then((itemsDB) => {
      setProductList(itemsDB)
    });
  }, []);

 

  return (
    <div>
      <FlexWrapper>
        <ItemList productsList={productsList}/>
      </FlexWrapper>
    </div>
  )
}

export default ItemListContainer