const initialValue = {
  products: [],
  cart: [],
  total: 0,
}

const rootReducer = (state = initialValue, action) => {
  const existItem = state.cart.find(item => item.id == action.payload.id);
  switch (action.type) {
    case "cart/add":
      if (existItem) {
        existItem.amount = existItem.amount + 1;
        return {
          ...state,
          total: state.total + action.payload.saleOffPrice
        }
      }
      const newCart = [...state.cart, { ...action.payload, amount: 1 }];
      return {
        ...state,
        cart: newCart,
        total: state.total + action.payload.saleOffPrice
      }
    case "cart/increase":
      existItem.amount++;
      return {
        ...state,
        total: state.total + action.payload.saleOffPrice
      }
    case "cart/decrease":
      existItem.amount--;
      if (existItem.amount == 0) {
        const filterCart = state.cart.filter(item => item.id != existItem.id);
        return {
          ...state,
          cart: filterCart,
          total: state.total - action.payload.saleOffPrice
        }
      }
      return {
        ...state,
        total: state.total - action.payload.saleOffPrice
      }
    default:
      return state;
  }

}

export default rootReducer