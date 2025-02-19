import React, { useContext } from 'react'
import "./stylesheet/cart.css"
import { ThisContext } from './navbar'

const Cart = () => {
  const useTop = useContext(ThisContext);
  
  return (
    <div className='cart' style={{ top: useTop }}>
      {/* // <div>use = {useTop}</div> */}
    </div>
  );
}

export default Cart;

