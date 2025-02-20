import React, { useContext } from 'react'
import "./stylesheet/cart.css"
import {ContextProvide} from '../thisContext';

const Cart = () => {

const {cart} = useContext(ContextProvide)
  
  return (
    <div className='cart'>
      {console.log(cart)}
    </div>
  );
}

export default Cart;

