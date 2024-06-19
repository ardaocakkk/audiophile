"use client";
import logo from "@/public/shared/desktop/logo.svg";
import facebook from "@/public/shared/desktop/icon-facebook.svg";
import twitter from "@/public/shared/desktop/icon-twitter.svg";
import instagram from "@/public/shared/desktop/icon-instagram.svg";
import FacebookIcon from "@/app/ui/icons/FacebookIcon";
import InstagramIcon from "@/app/ui/icons/InstagramIcon";
import TwitterIcon from "@/app/ui/icons/TwitterIcon";
import Image from "next/image";

import BestGearMobile from "@/public/shared/mobile/image-best-gear.jpg";
import BestGearTablet from "@/public/shared/tablet/image-best-gear.jpg";
import BestGearDesktop from "@/public/shared/desktop/image-best-gear.jpg";
import {useEffect, useState} from "react";
import Link from "next/link";
import AudiophileIcon from "@/app/ui/icons/AuidophileIcon";

export default function Footer(props) {

    const [bestGear, setBestGear] = useState();
    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if(width >= 1024) {
                setBestGear(BestGearDesktop);

            }
            else if(width >= 768 && width < 1024) {
                setBestGear(BestGearTablet);
            }
            else {
                setBestGear(BestGearMobile);

            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <footer className={'mt-[120px]'}>
        <div className={'w-[327px] h-[698px] mt-[300px] mx-auto md:m-auto md:w-[689px] md:h-[633px] md:mt-[48px] lg:w-[1110px] lg:h-[588px] lg:flex lg:flex-row-reverse '}>
            <Image src={bestGear} alt={"best gear"} className={'md:w-[689px] md:h-[300px] rounded-lg lg:w-[540px] lg:h-full '}/>
            <div className={'mt-[40px] w-[327px] md:mx-auto md:w-[573px] md:h-[270px] lg:w-[445px] lg:h-[295px] lg:my-auto lg:ml-4 '}>
                <div className={'w-full h-[76px] md:h-[88px]'}>
                    <h3 className={'text-center lg:text-start'}>Bringing you the <span className={'text-darkOrange'}>best</span> audio gear</h3>
                </div>
                <div className={'w-full h-[250px] mt-8 md:h-[150px] lg:w-[445px] lg:h-[175px]' }>
                    <p className={'text-center text-black text-opacity-30 lg:text-start'}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
            </div>
        </div>
      <div className={'w-full h-[654px] mt-[120px] md:w-full md:h-[400px] bg-black md:px-[39px] lg:w-full lg:h-[365px] lg:px-[165px] '}>
          <div className={'pt-[52px] flex flex-col  lg:flex-row lg:justify-between justify-center md:justify-start mx-auto'}>
          {/*<Image src={logo} alt={"logo"} className={'mx-auto lg:mx-0'}/>*/}
              <div className={'mx-auto md:mx-0'}>
                  <Link href={'/'}> <AudiophileIcon/></Link>
              </div>
          <div className={'flex flex-col md:flex-row    justify-center items-center md:justify-start md:m-0 text-white mt-[48px]'}>
              <Link href={'/'} >  <h6 className={'md:mt-4 md:mr-[34px] hover:text-darkOrange'}>HOME</h6> </Link>
             <Link href={'/category/headphones'} > <h6 className={'mt-4 md:mr-[34px] hover:text-darkOrange'}>HEADPHONES</h6> </Link>
             <Link href={'/category/speakers'} > <h6 className={'mt-4 md:mr-[34px] hover:text-darkOrange'}>SPEAKERS</h6> </Link>
             <Link href={'/category/earphones'}> <h6 className={'mt-4 hover:text-darkOrange'}>EARPHONES</h6> </Link>
          </div>
          </div>
          <div className={'mt-[48px] mx-[24px] md:w-[689px] md:h-[75px] md:mx-0'}>
              <p className={'text-white text-opacity-30 text-center md:text-start'}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
              </p>
          </div>
          <div className={'flex flex-col md:flex-row md:justify-between md:w-full '}>
             <div className={'mt-[48px]'}>
              <p className={'text-white text-opacity-30 text-center'}>
                  Copyright 2024. All Rights Reserved
              </p>
          </div>
          <div className={'mt-[48px] flex justify-center items-center mx-auto md:mx-0 text-white '}>
              <a className={'mr-4'}><FacebookIcon /></a>
              <a className={'mr-4'}><TwitterIcon/></a>
              <a><InstagramIcon/></a>
          </div>
          </div>
      </div>
    </footer>
  );
}