import React from 'react'
import store from '../redux/store'
import { useSelector } from 'react-redux'
import { StyledCartContainer } from './styled-components';

const Cart = () => {
  const { cart, total } = useSelector(store => store);
  console.log(cart)
  return (
    <div>
      <h3>Cart</h3>
      <h3>Total: {cart.total}</h3>
      {
        cart?.map((item) => <StyledCartContainer>
          <div>
            <h4>{item.name}</h4>
            <img style={{ "width": "200px" }} src={item.image} alt="" />
          </div>
          <div style={{ "algin-items": "center" }}>
            <h3>{item.saleOffPrice * item.amount}</h3>
            <button>+</button>
            {item.amount}
            <button>-</button></div>
        </StyledCartContainer>
        )}
      Total: { }
    </div>
  )
}

export default Cart