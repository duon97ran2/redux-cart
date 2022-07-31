import React from 'react'
import { useDispatch } from "react-redux"
import { currencyFormat } from '../utils/common';
import { StyledProductContainer, StyledProductItem } from './styled-components';


const Products = ({ products }) => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch({
      type: "cart/add",
      payload: product
    })
  }
  return (
    <div>
      <h3>Product</h3>
      <StyledProductContainer>
        {products?.map(item => <StyledProductItem>
          <h4>{item.name}</h4>
          <div>{currencyFormat(item.saleOffPrice)}</div>
          <img style={{ width: "50%" }} src={item.image} alt="" />
          <button onClick={() => addToCart(item)}>Add to cart </button>
        </StyledProductItem>
        )}
      </StyledProductContainer>
    </div>
  )
}

export default Products