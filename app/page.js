"use client";


import Header from "@/app/ui/Layout/Header/Header";
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
import zx7SpeakerMobile from "@/public/product-zx7-speaker/mobile/zx7-speaker-mobile.png";
import zx7SpeakerTablet from "@/public/product-zx7-speaker/tablet/zx7-speaker-tablet.png";
import zx7SpeakerDesktop from "@/public/product-zx7-speaker/desktop/zx7-speaker-desktop.png";
import yx1EarphonesMobile from "@/public/product-yx1-earphones/mobile/image-gallery-2.jpg";
import yx1EarphonesTablet from "@/public/product-yx1-earphones/tablet/image-gallery-2.jpg";
import yx1EarphonesDesktop from "@/public/product-yx1-earphones/desktop/image-gallery-2.jpg";
import BestGearMobile from "@/public/shared/mobile/image-best-gear.jpg";
import BestGearTablet from "@/public/shared/tablet/image-best-gear.jpg";
import BestGearDesktop from "@/public/shared/desktop/image-best-gear.jpg";
import Footer from "@/app/ui/Layout/Footer/Footer";
import AllCategories from "@/app/ui/cards/Category/AllCategories";
import Link from "next/link";

export default function Home() {
    const [deviceSize, setDeviceSize] = useState('');
    const [imageHeader, setImageHeader] = useState();
    const [headPhoneImage, setHeadPhoneImage] = useState();
    const [SpeakerImage, setSpeakerImage] = useState();
    const [SpeakerBackground, setSpeakerBackground] = useState();
    const [zx7Speaker, setZx7Speaker] = useState();
    const [yx1Earphones, setYx1Earphones] = useState();
    const [bestGear, setBestGear] = useState();



    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if(width >= 1024) {
                setDeviceSize('desktop');
                setImageHeader(ImageHeaderDesktop)
                setSpeakerImage(SpeakerImageDesktop)
                setSpeakerBackground(SpeakerBackgroundDesktop)
                setZx7Speaker(zx7SpeakerDesktop)
                setYx1Earphones(yx1EarphonesDesktop)
                setBestGear(BestGearDesktop)
            }
            else if(width <1024 && width >= 768) {
                setDeviceSize('tablet');
                setImageHeader(ImageHeaderTablet)
                setSpeakerImage(SpeakerImageTablet)
                setSpeakerBackground(SpeakerBackgroundTablet)
                setZx7Speaker(zx7SpeakerTablet)
                setYx1Earphones(yx1EarphonesTablet)
                setBestGear(BestGearTablet)
            }

            else {
                setDeviceSize('mobile');
                setImageHeader(ImageHeaderMobile);
                setHeadPhoneImage(xx99MarkIIMobile)
                setSpeakerImage(SpeakerImageMobile)
                setSpeakerBackground(SpeakerBackgroundMobile)
                setZx7Speaker(zx7SpeakerMobile)
                setYx1Earphones(yx1EarphonesMobile)
                setBestGear(BestGearMobile)
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
   <div>
       <main>
           <div className={'w-full h-fit relative lg:bg-black lg:hidden'}>
               <Image src={imageHeader} alt={"headphones"} className={"lg:w-1/4 relative lg:left-2/4 "}/>
               <div className={'absolute inset-0 flex flex-col items-center justify-center text-white lg:pl-[165px] lg:items-start '}>
                   <p className={'overline text-opacity-30 text-customGray'}>NEW PRODUCT</p>
                   <div className={'w-[328px] h-80px md:w-[396px] h-[116px] text-center mt-[16px]'}>
                       <h2 className={'md:hidden'}>XX99 Mark II
                           HEADPHONES</h2>
                       <h1 className={'hidden md:block'}>XX99 Mark II
                           HEADPHONES</h1>
                   </div>
                   <div className={'w-[328px] h-[75px] md:[396px] md:h-[75px] text-center mt-[24px] lg:text-start'}>
                       <p className={'text-white text-opacity-60'}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                   </div>
                   <SeeProductButton color="darkOrange" href={'/products/headphones/mark2-mark-two-headphones'} />
               </div>
           </div>
           <div className={'bg-black w-full h-[729px] flex justify-between hidden lg:flex'}>
               <div className={'text-white mt-[225px] ml-[165px]'}>
                   <p className={'overline text-opacity-30 text-customGray'}>NEW PRODUCT</p>
                   <div className={'w-[328px] h-80px md:w-[396px] h-[116px] text-center mt-[16px]'}>
                       <h2 className={'md:hidden'}>XX99 Mark II
                           HEADPHONES</h2>
                       <h1 className={'hidden md:block'}>XX99 Mark II
                           HEADPHONES</h1>
                   </div>
                   <div className={'w-[328px] h-[75px] md:[396px] md:h-[75px] text-center mt-[24px] lg:text-start'}>
                       <p className={'text-white text-opacity-60'}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                   </div>
                   <SeeProductButton color={'darkOrange'} href={'/products/headphones/mark2-mark-two-headphones'} />
               </div>
               <Image src={ImageHeaderDesktop} alt={"ASD"} className={'hidden lg:block right-0 justify-end '} />
           </div>

           <AllCategories  />

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
                       <SeeProductButton  color="black" href={'/products/speakers/zx9-speaker'}   />
                   </div>
               </div>
           </div>

           <div className="w-[327px] h-[320px] md:w-[689px] md:h-[320px] lg:w-[1110px] lg:h-[320px] mx-auto mt-6 relative">
               <Image src={zx7Speaker} alt="zx7 speaker" className="rounded-lg w-full lg:h-[320px]  object-cover" />
               <div className="absolute inset-0 flex flex-col items-start justify-center ml-6 md:ml-[62px]">
                   <h1 className="text-black text-3xl font-bold">ZX7 SPEAKER</h1>

                   <Link href={'/products/speakers/zx7-speaker'}>
                   <div className={'w-[160px] h-[48px] border border-black flex items-center justify-center mt-8 '}>
                       <h6 className={'text-center '}>SEE PRODUCT</h6>
                   </div>
                   </Link>
               </div>
           </div>

           <div className={'mt-7 w-[327px] h-[200px] mx-auto md:w-[339px] md:h-[320px] lg:w-[540px] lg:h-[320px] lg:mx-auto lg:pl-4 '}>
               <div className={'md:flex justify-center '}>
                   <Image src={yx1Earphones} alt={"yx1 earphone"} className={'w-[327px] h-[200px] lg:mr-3 md:w-[339px] md:h-[320px] lg:w-[540px] lg:h-[320px] rounded-lg'}/>
                       <div className={"mt-7 w-[327px] h-[200px] md:mt-0 md:ml-3 lg:ml-12 md:w-[339px] md:h-[320px] lg:w-[540px] lg:h-[320px] bg-customGray rounded-lg flex  "}>
                       <div className={'ml-6 flex flex-col   my-auto md:w-[339px] md:h-[320px]  md:justify-center md:ml-[44px] lg:w-[540px] lg:h-[320px] '}>
                           <h4>YX1 EARPHONES</h4>
                           <Link href={'/products/earphones/yx1-earphones'}>
                           <div className={'w-[160px] h-[48px] border border-black flex items-center justify-center mt-8 '}>
                               <h6 className={'text-center '}>SEE PRODUCT</h6>
                           </div>
                           </Link>

                       </div>

                   </div>
               </div>
           </div>
       </main>

   </div>

  );
}
