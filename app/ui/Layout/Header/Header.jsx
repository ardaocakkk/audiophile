import Image from 'next/image';
import cart from '@/public/shared/desktop/icon-cart.svg';
import logo from '@/public/shared/desktop/logo.svg';
import hamburger from "@/public/shared/tablet/icon-hamburger.svg"
import Link from "next/link";
import HamburgerIconButton from "@/app/ui/buttons/HamburgerIconButton";
import CartIcon from "@/app/ui/icons/CartIcon";
import AudiophileIcon from "@/app/ui/icons/AuidophileIcon";

export default function Header() {
    return <>
         <header>
            <div className={'flex w-full h-[90px] bg-black items-center justify-between text-white px-[24px] md:hidden'}>
                <HamburgerIconButton/>
                <Link href={'/'}> <AudiophileIcon/> </Link>
                <a> <CartIcon/> </a>
            </div>
             <div className={'hidden md:block md:flex lg:hidden w-full bg-black h-[90px] justify-between text-white items-center px-[30px]'}>
                 <div className={'flex items-center '}>
                     <a> <HamburgerIconButton/> </a>
                     <Link href={'/'} className={'ml-4'}> <AudiophileIcon/> </Link>
                 </div>
                 <div>
                     <a> <CartIcon/> </a>
                 </div>
             </div>

             <div className={'hidden lg:block lg:flex  w-full bg-black h-[90px] justify-between text-white items-center px-[70px]  '}>
                 <div>
                     <Link href={'/'}> <AudiophileIcon/> </Link>
                 </div>
                 <div className={'flex w-[429px] justify-between '}>
                     <Link href={'/'}> <p className={'hover:text-darkOrange'}> HOME</p></Link>
                     <Link href={'/category/headphones'}><p className={'hover:text-darkOrange'}>HEADPHONES</p></Link>
                     <Link href={'/category/speakers'}><p className={'hover:text-darkOrange'}>SPEAKERS</p></Link>
                     <Link href={'/category/earphones'}><p className={'hover:text-darkOrange'}>EARPHONES</p></Link>
                 </div>
                 <div>
                     <a> <CartIcon/> </a>
                 </div>
             </div>
         </header>
    </>
}