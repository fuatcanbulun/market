
import React from 'react'

// Components 
import BasketPanel from '../../components/basketPanel'


function Basket({title}) {

const sampleData = [
    {
        id:'exampleProduct',
        label:'Example Product',
        price:'14.99',
        currency:'₺'
    },
    {
        id:'exampleProduct',
        label:'Example Product',
        price:'14.99',
        currency:'₺'
    },
    {
        id:'exampleProduct',
        label:'Example Product',
        price:'14.99',
        currency:'₺'
    }
] 

  return (
    <BasketPanel data={sampleData}/>      
  );
}

export default Basket;
