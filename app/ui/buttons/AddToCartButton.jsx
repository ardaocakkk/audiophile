import {useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function AddToCartButton() {
    const [quantity, setQuantity] = useState(1);
    function increment() {
        setQuantity(quantity + 1);
    }
    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <>
            <div className={'flex  mx-auto items-center justify-between mt-[31px] md:justify-start '}>
                <div className={'w-[120px] h-[48px] bg-customGray flex justify-between  items-center'}>
                    <IconButton onClick={decrement} className={'px-2 text-black text-opacity-30'}> <RemoveIcon/> </IconButton>
                    <p>{quantity}</p>
                    <IconButton onClick={increment} className={'px-2 text-black text-opacity-30'}><AddIcon/></IconButton>

                </div>
                <button className={'w-[160px] h-[48px] bg-darkOrange text-white md:ml-2 hover:bg-lightOrange transition duration-500 '}>ADD TO CART <AddShoppingCartIcon className={'ml-2'} /> </button>
            </div>
        </>
    )
}