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
    left: '50%',
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







export default function CartButton() {

    const device = useDeviceType();

    const cart = data[6].cart
    const [boxSx, setBoxSx] = useState(sm);
    console.log(cart);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if(device === 'desktop') {
            setBoxSx(lg);
        }
        else if(device === 'tablet') {
            setBoxSx(md);
        }
        else {
            setBoxSx(sm);
        }
    }, []);

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
                    <Box sx={boxSx}>
                        <div className={'flex w-[270px] h-[26px] justify-between '}>
                            <h5>CART ({cart.length}) </h5>
                            <p className={'text-black text-opacity-30 '}>Remove All</p>
                        </div>
                        <div className={'flex flex-col mt-[31px] '}>
                            {cart.map((item) => {
                                return <CartItem key={item.id} item={item}/>
                            })}
                        </div>

                        <div className={'w-[270px] h-[25px] flex justify-between mt-[39px]'}>
                            <p>TOTAL</p>
                            <p>$ 1,999.00</p>
                        </div>

                        <div className={'w-[271px] h-[48px] bg-darkOrange flex justify-center items-center'}>
                            <Button className={'text-white w-full h-full'}>CHECKOUT</Button>
                        </div>

                    </Box>
                </Modal>
            </div>
        </>
    )
}