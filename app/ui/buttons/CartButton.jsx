"use client";

import {IconButton, Typography} from "@mui/material";
import CartIcon from "@/app/ui/icons/CartIcon";

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import useDeviceType from "@/app/ui/hooks/DeviceHook";
import CartItem from "@/app/ui/cards/Cart/CartItem";
import data from "@/data";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, increment} from "@/lib/features/CartSlice";

const sm = {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 327,
    height: 488,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const md = {
    position: 'absolute',
    top: '35%',
    left: '67%',
    transform: 'translate(-50%, -50%)',
    width: 377,
    height: 488,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const lg = {
    position: 'absolute',
    top: '35%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 387,
    height: 488,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};







export default function CartButton() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const device = useDeviceType();


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        setTotal(total);
    }, [cartItems]);

    const getBoxSx = () => {
        switch (device) {
            case 'desktop':
                return lg;
            case 'tablet':
                return md;
            case 'mobile':
                return sm;
            default:
                return {};
        }
    };

    const clear = () => {
        dispatch(clearCart());
    }




    return (
        <>
            <div>
                <IconButton onClick={handleOpen}> <CartIcon/> </IconButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={getBoxSx()}>
                        <div className={'flex w-[270px] h-[26px] justify-between '}>
                            <h5>CART ({cartItems.length}) </h5>
                            <button onClick={() => clear()} className={'text-black text-opacity-30 '}>Remove All</button>
                        </div>
                        <div className={'w-[384px] h-[240px] overflow-auto '}>
                        <div className={'flex flex-col mt-[31px] md:w-[313px] md:h-[240px] md:ml-[33px] '}>
                            {cartItems.map((item) => {
                                return <CartItem key={item.id} item={item} />
                            })}
                        </div>
                        </div>

                        <div className={'w-[270px] h-[25px] md:w-[308px] md:h-[25px] flex justify-between mt-[39px]'}>
                            <p className={'text-black text-opacity-30'}>TOTAL</p>
                            <p className={'font-bold'}>{total} $</p>
                        </div>

                        <div className={'w-[271px] h-[48px] md:w-[313px] md:h-[48px] bg-darkOrange flex justify-center items-center'}>
                           <Link onClick={handleClose} href={'/checkout'} className={'w-full h-full'}> <Button className={' text-white w-full h-full'}>CHECKOUT</Button> </Link>
                        </div>

                    </Box>
                </Modal>
            </div>
        </>
    )
}