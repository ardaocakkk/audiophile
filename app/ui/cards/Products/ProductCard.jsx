"use client";

import Image from "next/image";
import YAMLCard from "@/app/ui/cards/Products/YAML/YAMLCard";
import {useEffect, useState} from "react";
import AddToCartButton from "@/app/ui/buttons/AddToCartButton";
import useDeviceType from "@/app/ui/hooks/DeviceHook";

export default function ProductCard(props) {
    const device = useDeviceType();

    return (
        <>

            <div className="w-[327px] h-[755px] md:w-[689px] md:h-[480px] lg:w-[1110px] lg:h-[560px]   mx-auto mt-[65px]">
                <div className={'flex flex-col md:flex-row md:justify-between  '}>
                <div className="w-[327px] md:w-[281px] h-[327px] md:h-[480px] lg:w-[540px] lg:h-[560px] lg:mr-[125px]   bg-customGray rounded-lg flex justify-center items-center  ">
                    <div className="relative w-[185px] h-[186px] lg:w-[291px] lg:h-[350px]">
                        <Image
                            src={props.img}
                            alt="Centered image"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className={'w-[327px] h-[396px] mt-[32px] md:w-[340px] md:h-[357px] lg:w-[445px] lg:h-[407px] '}>
                    <p className={`overline text-darkOrange ${props.product.new === true ? "block" : "hidden"}  `}>NEW PRODUCT</p>
                    <div className={'w-[327px] h-[76px] mt-6'}>
                        <h3 className={'text-start'}>{props.product.name}</h3>
                    </div>
                    <div className={'w-[327px] h-[125px] mt-6'}>
                        <p className={'text-black text-opacity-30'}>{props.product.description}</p>
                    </div>
                    <div className={'mt-6'}>
                        <h5>$ {props.product.price}</h5>
                    </div>
                    <AddToCartButton/>
                </div>
                </div>

            </div>
            <div className={'flex flex-col md:flex-col lg:w-[1110px] md:w-[689px] md:h-[562px]  lg:grid grid-cols-2 lg:mx-auto lg:h-[318px] mx-auto mb-[160px] items-center '}>
            <div className={'w-[327px] md:w-[689px] md:h-[318px] lg:w-[635px] lg:h-[318px]   mt-[88px] h-[510px] flex flex-col mx-auto lg:mt-[160px]'}>
                <div className={'w-full h-[36px] '}>
                    <h4>FEATURES</h4>
                </div>
                <div className={'w-full h-[450px] mt-6 '}>
                    <p className={'text-black text-opacity-30'}> {props.product.features} </p>
                </div>
            </div>

            <div className={'w-[327px] md:w-[549px] md:h-[124px] lg:w-[350px] lg:h-[225px] flex flex-col  md:flex-row h-[217px]   lg:ml-[125px] lg:flex-col  lg:mt-[36px] '}>
                <div className={'mt-[24px] w-[198px] h-[157px] md:h-[36px]  md:w-[339px]  lg:h-[318px] md:mt-0  md:grid md:grid-cols-2 lg:flex lg:flex-col lg:items-start'}>
                <h3 className={'mb-[32px]'}>IN THE BOX</h3>
                    <div className={'w-[199px] h-[157px] md:w-[199px] md:h-[157px] lg:w-[350px] lg:h-[225px] '}>
                    {props.product.includes.map((item, index) => {
                      return (
                            <p key={index} className={'subTitle text-black text-opacity-30'}><span className={'text-darkOrange mr-[20px] '}> {item.quantity}x </span>{item.item}</p>
                      )
                    })}
                    </div>
                </div>
            </div>
            </div>
            <div className={'mx-auto flex w-[327px] md:w-[690px] md:h-[368px] justify-center lg:w-[1110px]  flex-col md:grid md:grid-cols-2  lg:h-[592px]  items-center mt-[88px]'}>
                <div className={''}>
                <div className="relative w-[327px] h-[174px] md:w-[277px] md:h-[174px]  md:mt-0 lg:w-[445px] lg:h-[280px] ">
                    <Image
                        src={props.galleryFirst}
                        alt="Centered image"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>

                <div className={'relative  w-[327px] h-[174px]  md:w-[277px] md:h-[174px] mt-[20px] lg:w-[445px] lg:h-[280px]'}>
                    <Image
                        src={props.gallerySecond}
                        alt="Centered image"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>
                </div>

                <div className={'relative w-[327px] mt-[20px] md:w-[395px] md:h-[368px] h-[368px]  md:mt-0 lg:w-[635px] lg:h-[592px] '}>
                    <Image
                        src={props.galleryThird}
                        alt="Centered image"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>
            </div>

        </>
    )
}