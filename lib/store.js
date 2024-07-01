import {configureStore} from '@reduxjs/toolkit';
import cartSlice from "@/lib/features/CartSlice";
import authSlice from "@/lib/features/auth/AuthSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: authSlice,
            cart: cartSlice,

        },
    });
}