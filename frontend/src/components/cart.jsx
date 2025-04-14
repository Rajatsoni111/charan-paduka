import React, { useContext } from 'react'
import "./stylesheet/cart.css"
import {ContextProvide} from '../thisContext';

const Cart = () => {

const {top} = useContext(ContextProvide)
  
  return (
    <div className='cart' style={{top:{top}}}>
      {console.log(top)}
    </div>
  );
}

export default Cart;

