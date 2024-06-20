import {IconButton} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {useState} from "react";
import Image from "next/image";

export default function CartItem(props) {
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
                    <p className={'text-black subTitle text-opacity-30'}>{quantity} x {props.item.price}</p>
                </div>
                <div className={'w-[120px] h-[48px] bg-customGray flex justify-between  items-center'}>
                    <IconButton onClick={decrement} className={'px-2 text-black text-opacity-30'}> <RemoveIcon/> </IconButton>
                    <p>{quantity}</p>
                    <IconButton onClick={increment} className={'px-2 text-black text-opacity-30'}><AddIcon/></IconButton>

                </div>
            </div>
        </div>

        </>
    )
}