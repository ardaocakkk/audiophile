"use client";

import Image from "next/image";
import YAMLCard from "@/app/ui/cards/Products/YAML/YAMLCard";
import {useEffect, useState} from "react";

export default function ProductCard(props) {
    const [device, setDevice] = useState('');
    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width >= 1024) {
                setDevice('desktop')
            } else if (width < 1024 && width >= 768) {
                setDevice('tablet')
            } else {
                setDevice('mobile')
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>

            <div className="w-[327px] h-[755px]    mx-auto mt-[65px]">
                <div className="w-[327px] h-[327px] bg-customGray rounded-lg flex justify-center items-center">
                    <div className="relative w-[185px] h-[186px]">
                        <Image
                            src={props.img}
                            alt="Centered image"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className={'w-[327px] h-[396px] mt-[32px]'}>
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
                    <div className={'flex  mx-auto items-center justify-between mt-[31px]'}>
                        <div className={'w-[120px] h-[48px] bg-customGray flex justify-between  items-center'}>
                            <p className={'px-2'}>-</p>
                            <p>quantity</p>
                            <p className={'px-2'}>+</p>

                        </div>
                        <button className={'w-[160px] h-[48px] bg-darkOrange text-white  '}>ADD TO CART</button>
                    </div>
                </div>

            </div>
            <div className={'w-[327px] mt-[88px] h-[510px] flex flex-col mx-auto'}>
                <div className={'w-full h-[36px] '}>
                    <h4>FEATURES</h4>
                </div>
                <div className={'w-full h-[450px] mt-6 '}>
                    <p className={'text-black text-opacity-30'}> {props.product.features} </p>
                </div>
            </div>

            <div className={'w-[327px] h-[217px] mx-auto mt-[113px]'}>
                <h3>IN THE BOX</h3>
                <div className={'mt-[24px] w-[198px] h-[157px]'}>
                    {props.product.includes.map((item, index) => {
                      return (
                            <p key={index} className={'subTitle text-black text-opacity-30'}><span className={'text-darkOrange mr-[20px]'}> {item.quantity}x </span>{item.item}</p>
                      )
                    })}
                </div>
            </div>
            <div className={'mx-auto flex w-[327px] justify-center flex-col items-center mt-[88px]'}>
                <div className={'relative w-[327px] h-[174px]'}>
                    <Image
                        src={props.gallerySecond}
                        alt="Centered image"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>

                <div className={'relative w-[327px] h-[174px] mt-[20px]'}>
                    <Image
                        src={props.galleryThird}
                        alt="Centered image"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                    />
                </div>

                <div className="relative w-[327px] h-[368px] mt-[20px]">
                    <Image
                        src={props.galleryFirst}
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