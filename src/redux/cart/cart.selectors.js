export const selectCartItems = state => state.cart.items;
export const selectCartDropdownHidden = state => state.cart.hidden;
export const selectTotalQuantity = state =>  state.cart.items.reduce((pre, curr) => pre + curr.quantity, 0);
export const selectTotalPrice = state => state.cart.items.reduce((pre, curr) => pre + curr.quantity * curr.price , 0);