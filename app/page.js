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
import SpeakerImageMobile from "@/public/home/mobile/image-removebg-preview(38).png";
import SpeakerImageTablet from "@/public/icons/group 6 tablet.png";
import SpeakerImageDesktop from "@/public/home/desktop/desktop-zx9-speaker-home.png";
import SpeakerBackgroundMobile from "@/public/home/mobile/Group 4.png";
import SpeakerBackgroundTablet from "@/public/home/tablet/Group 4-tablet.png";
import SpeakerBackgroundDesktop from "@/public/home/desktop/circle-desktop.png";


export default function Home() {
    const [deviceSize, setDeviceSize] = useState('');
    const [imageHeader, setImageHeader] = useState();
    const [headPhoneImage, setHeadPhoneImage] = useState();
    const [SpeakerImage, setSpeakerImage] = useState();
    const [SpeakerBackground, setSpeakerBackground] = useState();


    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if(width >= 1024) {
                setDeviceSize('desktop');
                setImageHeader(ImageHeaderDesktop)
                setSpeakerImage(SpeakerImageDesktop)
                setSpeakerBackground(SpeakerBackgroundDesktop)
            }
            else if(width <1024 && width >= 768) {
                setDeviceSize('tablet');
                setImageHeader(ImageHeaderTablet)
                setSpeakerImage(SpeakerImageTablet)
                setSpeakerBackground(SpeakerBackgroundTablet)
            }

            else {
                setDeviceSize('mobile');
                setImageHeader(ImageHeaderMobile);
                setHeadPhoneImage(xx99MarkIIMobile)
                setSpeakerImage(SpeakerImageMobile)
                setSpeakerBackground(SpeakerBackgroundMobile)
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
                   <SeeProductButton color="darkOrange" />
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
                   <SeeProductButton color={'darkOrange'} />
               </div>
               <Image src={ImageHeaderDesktop} alt={"ASD"} className={'hidden lg:block right-0 justify-end '} />
           </div>

           <div className={'w-[327px] grid grid-cols-1 mx-auto h-[217px] mt-[92px] md:w-[689px] md:px-[40px] md:mt-[96px]  md:grid md:grid-cols-3 md:m-0 lg:gap-28 lg:w-[1110px] lg:justify-items-center lg:mx-auto'}>
               <HomeItemCategoryCard img={xx99MarkIIMobile} item={"HEADPHONES"} />
               <div className={'mt-[100px] md:m-0 md:ml-7 '}>
               <HomeItemCategoryCard img={imageThumbnailSpeakers} item={"SPEAKERS"}  />
               </div>
               <div className={'mt-[100px] md:m-0 md:ml-14 md:mr-6'}>
               <HomeItemCategoryCard img={imageThumbnailEarphones} item={"EARPHONES"} />
               </div>
           </div>

           <div className="mx-auto mt-[580px] md:mt-[148px] rounded-xl w-[327px] h-[600px] md:w-[689px] md:h-[720px] lg:w-[1110px] lg:h-[560px] bg-darkOrange relative">
               <Image
                   src={SpeakerImage}
                   alt="speaker"
                   className="absolute z-10 left-1/4 md:left-1/3 top-14 lg:left-24 lg:top-24"
               />
               <Image src={SpeakerBackground} alt="speaker background" className="absolute" />
               <div className="text-white w-[349px] h-full items-center pt-[64px] flex flex-col justify-center mx-auto lg:absolute lg:right-0 lg:items-start lg:pl-10 lg:pt-0">
                   <div className="w-[261px] h-[116px] mt-[160px] md:mt-[250px] lg:mt-0 text-center lg:text-left">
                       <h2>ZX9 SPEAKER</h2>
                   </div>
                   <div className="text-center lg:text-left w-[280px] h-[75px] mt-4 lg:mt-8">
                       <p className="text-lg">
                           Upgrade to premium speakers that are phenomenally built to deliver truly
                           remarkable sound.
                       </p>
                   </div>
                   <div className="md:pt-12 lg:pt-8">
                       <SeeProductButton  color="black"   />
                   </div>
               </div>
           </div>


       </main>
   </div>
  );
}
