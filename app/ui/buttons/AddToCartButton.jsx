import {useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {useDispatch} from "react-redux";
import {addToCart} from "@/lib/features/CartSlice";
import {increment} from "@/lib/features/CartSlice";
export default function AddToCartButton(props) {
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const incrementItemQuantity = (product) => {
        setQuantity(quantity + 1);
    }
    const handleClick = (product) => {
        dispatch(addToCart({product, quantity}));
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
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
                    <IconButton onClick={() => incrementItemQuantity(props.theProduct)} className={'px-2 text-black text-opacity-30'}><AddIcon/></IconButton>

                </div>
                <button onClick={() => handleClick(props.theProduct)} className={'w-[160px] h-[48px] bg-darkOrange text-white md:ml-2 hover:bg-lightOrange text-w transition duration-500 '}>ADD TO CART <AddShoppingCartIcon className={'ml-2'} /> </button>
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        vertical={'top'}
                        horizontal={'center'}
                        sx={{ width: '100%' }}
                    >
                        <p className={'subTitle'}>Item added to cart successfully!</p>
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}