






export const addToCard=(item,restaurantName)=>{
 return  {
    type: "ADD_TO_CART",
    payload: {
      ...item,
      restaurantName: restaurantName,
    
    },
  }
}