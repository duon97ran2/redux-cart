const initialValue = {
  products: [],
  cart: [],
  total: 0,
}

const rootReducer = (state = initialValue, action) => {

  switch (action.type) {
    case "cart/add":
      const newCart = [...state.cart, action.payload]
      return {
        ...state,
        cart: newCart,
        total: state.total + action.payload.price
      }
    default:
      return state;
  }

}

export default rootReducer