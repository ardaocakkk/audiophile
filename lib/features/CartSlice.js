import {createSlice} from "@reduxjs/toolkit";


const cartItem = [
    {
        "id": 3,
        "name": "XX99 MK II",
        "slug": "mark2-mark-one-headphones",
        "price": 2999,
        "quantity": 1,
        "image": "/cart/cart-1.png",
    },
    {
        "id": 1,
        "name": "XX 59",
        "slug": "xx59-headphones",
        "price": 899,
        "quantity": 2,
        "image": "/cart/cart-2.png",
    },
    {
        "id": 4,
        "name": "YX1 Wireless Earphones",
        "slug": "yx1-earphones",
        "price": 599,
        "quantity": 1,
        "image": "/cart/cart-3.png",
    },
    {
        "id" : 2,
        "name" : "XX99 MK I",
        "slug": "mark2-mark-one-headphones",
        "price" : 1750,
        "quantity" : 1,
        "image" : "/cart/cart-4.jpg"
    },
    {
        "id" : 5,
        "name" : "ZX7 Speaker",
        "slug": "zx7-speaker",
        "price" : 3500,
        "quantity" : 1,
        "image" : "/cart/cart-5.jpg"
    },
    {
        "id" : 6,
        "name" : "ZX9 Speaker",
        "slug": "zx9-speaker",
        "price" : 4500,
        "quantity" : 1,
        "image" : "/cart/cart-6.jpg"
    }
]

const initialState = {
    cartItems : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart : (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            }else {
                const tempProduct = cartItem.find((item) => item.id === action.payload.id);
                state.cartItems.push(tempProduct);
            }



        },
        removeFromCart : (state, action) => {
            const id = action.payload;
            state.cartItems = state.cart.filter((item) => item.id !== id);
        },
        clearCart : (state) => {
            state.cartItems = [];
        }
    }
});

export const {addToCart,removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;