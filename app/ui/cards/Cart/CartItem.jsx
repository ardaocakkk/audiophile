import {IconButton} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {useEffect, useState} from "react";
import Image from "next/image";

import {useDispatch, useSelector} from "react-redux";
import {incrementItemQuantity, decrementItemQuantity} from "@/lib/features/CartSlice";

export default function CartItem(props) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const increment = (product) => {

        setQuantity(quantity + 1);
        dispatch(incrementItemQuantity(product));
    }
    const decrement = (product) => {
            setQuantity(quantity - 1);
            dispatch(decrementItemQuantity(product));
    }




    return (
        <>

        <div className={'w-[271px] h-[64px] mt-[24px]'}>
            <div className={'flex justify-between items-center'}>
                <div className="w-[64px] h-[64px] rounded-lg bg-customGray flex items-center justify-center">
                    <div className="relative w-[36px] h-[40px]">
                        <Image
                            src={props.item.image}
                            alt="Centered image"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className={'w-[160px] h-[64px]  flex flex-col justify-between ml-4'}>
                    <p className={'text-black font-bold text-opacity-60'}>{props.item.name}</p>
                    <p className={'text-black subTitle text-opacity-30'}>{props.item.quantity} x {props.item.price}</p>
                </div>
                <div className={'w-[120px] h-[48px] bg-customGray flex justify-between  items-center'}>
                    <IconButton onClick={() => {decrement(props.item)}} className={'px-2 text-black text-opacity-30'}> <RemoveIcon/> </IconButton>
                    <p>{props.item.quantity}</p>
                    <IconButton onClick={() => increment(props.item)} className={'px-2 text-black text-opacity-30'}><AddIcon/></IconButton>

                </div>
            </div>
        </div>

        </>
    )
}