export const addToCard = (item, restaurantName,checkBoxValue) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      ...item,
      restaurantName: restaurantName,
      checkBoxValue:checkBoxValue
    },
  };
};
