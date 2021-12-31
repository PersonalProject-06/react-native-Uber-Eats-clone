let DefaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CARD": {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      console.log(newState);
      return newState
    }
    default :
    return state
  }

};


export default cartReducer