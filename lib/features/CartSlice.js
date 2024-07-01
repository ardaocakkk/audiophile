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
        "name": "YX1 ",
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
        "name" : "ZX7 ",
        "slug": "zx7-speaker",
        "price" : 3500,
        "quantity" : 1,
        "image" : "/cart/cart-5.jpg"
    },
    {
        "id" : 6,
        "name" : "ZX9 ",
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
            const {product, quantity} = action.payload;

            const itemIndex = state.cartItems.findIndex((item) => item.id === product.id);
            if(itemIndex >= 0) {
                const tempProduct = state.cartItems[itemIndex];
                tempProduct.quantity += 1;
                state.cartItems[itemIndex] = tempProduct;
            }else {
                const tempProduct = cartItem.find((item) => item.id === product.id);

                if (tempProduct) {
                    const newProduct = {
                        ...tempProduct,
                        quantity: quantity,
                    };
                    state.cartItems.push(newProduct);
                } else {
                    console.error('Product not found!');
                }
            }
        },
        removeFromCart : (state, action) => {
            const id = action.payload;
            state.cartItems = state.cart.filter((item) => item.id !== id);
        },
        clearCart : (state) => {
            state.cartItems = [];
        },
        incrementItemQuantity : (state, action) => {
            const tempProduct = state.cartItems.find((item) => item.id === action.payload.id);
            tempProduct.quantity += 1;
        },
        decrementItemQuantity : (state, action) => {
            const tempProduct = state.cartItems.find((item) => item.id === action.payload.id);
            if(tempProduct.quantity >= 1) {
                tempProduct.quantity -= 1;
                if(tempProduct.quantity === 0) {
                    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
                }
            }


        }
    }
});

export const {addToCart,removeFromCart, clearCart, incrementItemQuantity, decrementItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;