import {configureStore} from '@reduxjs/toolkit';
import cartSlice from "@/lib/features/CartSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartSlice,
        },
    });
}