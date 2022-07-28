import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
import { productApi } from "../hooks/services/backup-product.api";
import cartReducer from "./cart/cart.reducer";
import logger from "redux-logger";

const store = configureStore({
    reducer:{
        user: userReducer,
        cart: cartReducer,
        [productApi.reducerPath] : productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware, logger]),
})

export default store;