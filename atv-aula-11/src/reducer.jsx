export const initialStateProdutos = ['produto1', 'produto2'];


export function ProductReducer(state, action) {
    
    switch (action.type) {
      case "PRODUCT_ADD":
        return [...state, action.payload];
      case "REMOVE_PRODUCT":
        return state.slice(0, state.length -1);
      default:
        return state;
    }
  }
