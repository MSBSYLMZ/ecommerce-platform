import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        hidden: true
    },
    reducers: {
        toggleCartDropdown(state){
            state.hidden = !state.hidden
        },
        addItemToCart(state,action) {
            const index = state.items.findIndex(item=> item.id === action.payload.id);
            if(index > -1){
                state.items[index].quantity++;
            }else{
                const item = {...action.payload};
                item.quantity = 1 
                state.items.push(item);
            }
        },
        removeItemFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        increaseQuantityOfItem(state, action){
            const index = state.items.findIndex(item => item.id === action.payload);
            if(index > -1){
                state.items[index].quantity++;
            }
        },
        decreaseQuantityofItem(state, action){
            const index = state.items.findIndex(item => item.id === action.payload)
            if(state.items[index].quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload);
            }else{
                state.items[index].quantity--;
            }
        },
        clearCart(state){
            state.items = [];
        },
    }
});


const { actions,  reducer:  cartReducer } = cartSlice;

export const { 
    toggleCartDropdown, 
    addItemToCart, 
    removeItemFromCart, 
    increaseQuantityOfItem, 
    decreaseQuantityofItem,
    clearCart } = actions;

export  default cartReducer;