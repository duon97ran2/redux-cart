import React from 'react'
import store from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { StyledCartContainer } from './styled-components';
import { currencyFormat } from '../utils/common';

const Cart = () => {
  const { cart, total } = useSelector(store => store);
  const dispatch = useDispatch();
  const increase = (product) => {
    dispatch({
      type: "cart/increase",
      payload: product
    })
  }
  const decrease = (product) => {
    dispatch({
      type: "cart/decrease",
      payload: product
    })
  }
  return (
    <div>
      <h3>Cart</h3>
      <h3>Total: {currencyFormat(total)}</h3>
      {
        cart?.map((item) => <StyledCartContainer>
          <div>
            <h4>{item.name}</h4>
            <img style={{ "width": "200px" }} src={item.image} alt="" />
          </div>
          <div style={{ "algin-items": "center" }}>
            <h3>{currencyFormat(item.saleOffPrice * item.amount)}</h3>
            <button onClick={() => {
              increase(item)
            }}>+</button>
            {item.amount}
            <button onClick={() => {
              decrease(item)
            }}>-</button></div>
        </StyledCartContainer>
        )}
    </div>
  )
}

export default Cart