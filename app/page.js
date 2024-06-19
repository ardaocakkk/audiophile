"use client";


import Header from "@/app/ui/Layout/Header";
import {useEffect, useState} from "react";

import ImageHeaderMobile from "@/public/home/mobile/image-header.jpg";
import ImageHeaderTablet from "@/public/home/tablet/image-header.jpg";
import ImageHeaderDesktop from "@/public/home/desktop/desktop-img.png"
import Image from "next/image";
import SeeProductButton from "@/app/ui/buttons/SeeProductButton";
import xx99MarkIIMobile from "@/public/shared/desktop/image-category-thumbnail-headphones.png"
import imageThumbnailSpeakers from "@/public/shared/desktop/image-category-thumbnail-speakers.png"
import HomeItemCategoryCard from "@/app/ui/cards/HomeItemCategoryCard";
import imageThumbnailEarphones from "@/public/shared/desktop/image-category-thumbnail-earphones.png";

export default function Home() {
    const [deviceSize, setDeviceSize] = useState('');
    const [imageHeader, setImageHeader] = useState();
    const [headPhoneImage, setHeadPhoneImage] = useState();


    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if(width >= 1024) {
                setDeviceSize('desktop');
                setImageHeader(ImageHeaderDesktop)
            }
            else if(width <1024 && width >= 768) {
                setDeviceSize('tablet');
                setImageHeader(ImageHeaderTablet)
            }

            else {
                setDeviceSize('mobile');
                setImageHeader(ImageHeaderMobile);
                setHeadPhoneImage(xx99MarkIIMobile)
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
   <div>
       <Header />
       <main>
           <div className={'w-full h-fit relative lg:bg-black lg:hidden'}>
               <Image src={imageHeader} alt={"headphones"} className={"lg:w-1/4 relative lg:left-2/4 "}/>
               <div className={'absolute inset-0 flex flex-col items-center justify-center text-white lg:pl-[165px] lg:items-start '}>
                   <p className={'overline text-customGray'}>NEW PRODUCT</p>
                   <div className={'w-[328px] h-80px md:w-[396px] h-[116px] text-center mt-[16px]'}>
                       <h2 className={'md:hidden'}>XX99 Mark II
                           HEADPHONES</h2>
                       <h1 className={'hidden md:block'}>XX99 Mark II
                           HEADPHONES</h1>
                   </div>
                   <div className={'w-[328px] h-[75px] md:[396px] md:h-[75px] text-center mt-[24px] lg:text-start'}>
                       <p className={''}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                   </div>
                   <SeeProductButton/>
               </div>
           </div>
           <div className={'bg-black w-full h-[729px] flex justify-between hidden lg:flex'}>
               <div className={'text-white mt-[225px] ml-[165px]'}>
                   <p className={'overline text-customGray'}>NEW PRODUCT</p>
                   <div className={'w-[328px] h-80px md:w-[396px] h-[116px] text-center mt-[16px]'}>
                       <h2 className={'md:hidden'}>XX99 Mark II
                           HEADPHONES</h2>
                       <h1 className={'hidden md:block'}>XX99 Mark II
                           HEADPHONES</h1>
                   </div>
                   <div className={'w-[328px] h-[75px] md:[396px] md:h-[75px] text-center mt-[24px] lg:text-start'}>
                       <p className={''}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                   </div>
                   <SeeProductButton/>
               </div>
               <Image src={ImageHeaderDesktop} alt={"ASD"} className={'hidden lg:block right-0 justify-end '} />
           </div>

           <div className={'w-[327px] grid grid-cols-1 mx-auto h-[217px] mt-[92px] md:w-[689px] md:px-[40px] md:mt-[96px]  md:grid md:grid-cols-3 md:m-0 lg:w-full lg:pl-[165px] '}>
               <HomeItemCategoryCard img={xx99MarkIIMobile} item={"HEADPHONES"} />
               <div className={'mt-[100px] md:m-0 md:ml-7 '}>
               <HomeItemCategoryCard img={imageThumbnailSpeakers} item={"SPEAKERS"}  />
               </div>
               <div className={'mt-[100px] md:m-0 md:ml-14'}>
               <HomeItemCategoryCard img={imageThumbnailEarphones} item={"EARPHONES"} />
               </div>
           </div>


       </main>
   </div>
  );
}
