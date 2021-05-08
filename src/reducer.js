export const initialState = {
  basket: [],
};

export const getTotalPrice = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.item] };
    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];
      newBasket = newBasket.filter((baskteItem) => baskteItem.id !== action.id);
      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
