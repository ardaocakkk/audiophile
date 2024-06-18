import Image from 'next/image';
import cart from '@/public/shared/desktop/icon-cart.svg';
import logo from '@/public/shared/desktop/logo.svg';
import hamburger from "@/public/shared/tablet/icon-hamburger.svg"
import Divider from '@mui/material/Divider';

export default function Header() {
    return <>
         <header>
            <div className={'flex w-full h-[90px] bg-black items-center justify-between text-white px-[24px] md:hidden'}>
                <a> <Image src={hamburger} alt={"hamburger"}/> </a>
                <a> <Image src={logo} alt={"logo"} /> </a>
                <a> <Image src={cart} alt={"cart"}/> </a>
            </div>
             <div className={'hidden md:block md:flex lg:hidden w-full bg-black h-[90px] justify-between text-white items-center px-[30px]'}>
                 <div className={'flex items-center '}>
                     <a> <Image src={hamburger} alt={"hamburger"}/> </a>
                     <a> <Image src={logo} alt={"logo"} className={'ml-[42px]'} /> </a>
                 </div>
                 <div>
                     <a> <Image src={cart} alt={"cart"}/> </a>
                 </div>
             </div>

             <div className={'hidden lg:block lg:flex  w-full bg-black h-[90px] justify-between text-white items-center px-[70px]  '}>
                 <div>
                     <a> <Image src={logo} alt={"logo"} /> </a>
                 </div>
                 <div className={'flex w-[429px] justify-between'}>
                     <a>HOME</a>
                     <a>HEADPHONES</a>
                     <a>SPEAKERS</a>
                     <a>EARPHONES</a>
                 </div>
                 <div>
                     <a> <Image src={cart} alt={"cart"}/> </a>
                 </div>
             </div>
         </header>
    </>
}