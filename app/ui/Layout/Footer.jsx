import logo from "@/public/shared/desktop/logo.svg";
import facebook from "@/public/shared/desktop/icon-facebook.svg";
import twitter from "@/public/shared/desktop/icon-twitter.svg";
import instagram from "@/public/shared/desktop/icon-instagram.svg";
import FacebookIcon from "@/app/ui/icons/FacebookIcon";
import InstagramIcon from "@/app/ui/icons/InstagramIcon";
import TwitterIcon from "@/app/ui/icons/TwitterIcon";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={'mt-[120px]'}>
      <div className={'w-[375px] h-[654px] md:w-[768px] md:h-[400px] bg-black md:px-[39px] lg:w-full lg:h-[365px] lg:px-[165px] '}>
          <div className={'pt-[52px] flex flex-col lg:flex-row lg:justify-between justify-center md:justify-start mx-auto'}>
          <Image src={logo} alt={"logo"} className={''}/>
          <div className={'flex flex-col md:flex-row    justify-center items-center md:justify-start md:m-0 text-white mt-[48px]'}>
              <h6 className={'md:mt-4 md:mr-[34px] hover:text-darkOrange'}>HOME</h6>
              <h6 className={'mt-4 md:mr-[34px] hover:text-darkOrange'}>HEADPHONES</h6>
              <h6 className={'mt-4 md:mr-[34px] hover:text-darkOrange'}>SPEAKERS</h6>
              <h6 className={'mt-4 hover:text-darkOrange'}>EARPHONES</h6>
          </div>
          </div>
          <div className={'mt-[48px] mx-[24px] md:w-[689px] md:h-[75px] md:mx-0'}>
              <p className={'text-white text-opacity-30 text-center md:text-start'}>
                  Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
              </p>
          </div>
          <div className={'flex flex-col md:flex-row md:justify-between md:w-full '}>
             <div className={'mt-[48px]'}>
              <p className={'text-white text-opacity-30 text-center'}>
                  Copyright 2024. All Rights Reserved
              </p>
          </div>
          <div className={'mt-[48px] flex justify-center items-center mx-auto md:mx-0 text-white hover:fill-darkOrange'}>
              <a className={'mr-4'}><FacebookIcon /></a>
              <a className={'mr-4'}><TwitterIcon/></a>
              <a><InstagramIcon/></a>
          </div>
          </div>
      </div>
    </footer>
  );
}