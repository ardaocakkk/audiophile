"use client";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import HamburgerIcon from "@/app/ui/icons/HamburgerIcon";
import Link from "next/link";
import {useRouter} from "next/navigation";
import AllCategories from "@/app/ui/cards/Category/AllCategories";


export default function HamburgerIconButton() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true)
    }
    const handleClose = (path) => {
        setAnchorEl(null);
        setOpen(false)

    }

    return (

        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <HamburgerIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
                PaperProps={{
                    style: {
                        backgroundColor: '#FFFFFF', // Set your custom background color here
                    },
                }}
            >
                {/*<Link href={'/category/headphones'}><MenuItem  onClick={() => handleClose('headphones')}>  <p className={'text-white hover:text-darkOrange'}>HEADPHONES</p> </MenuItem></Link>*/}
                {/*<Link href={'/category/earphones'}><MenuItem onClick={() => handleClose('earphones')}>  <p className={'text-white hover:text-darkOrange'}>EARPHONES</p></MenuItem></Link>*/}
                {/*<Link href={'/category/speakers'}> <MenuItem onClick={() => handleClose('speakers')}>  <p className={'text-white hover:text-darkOrange'}>SPEAKERS</p></MenuItem></Link>*/}
                <div className={'w-[375px] md:w-[768px] h-[750px] md:h-[340px]'}>
                    <div onClick={handleClose} className={'w-[327px]  mx-auto md:mx-0'}>
                        <AllCategories/>
                    </div>
                </div>


            </Menu>
        </>
    )
}