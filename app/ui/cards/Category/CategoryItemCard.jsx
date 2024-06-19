"use client";

import Image from "next/image";
import SeeProductButton from "@/app/ui/buttons/SeeProductButton";
import useState from "react";
export default function CategoryItemCard(props) {



    return (
        <>
            <div>

                <div className={'w-[327px] h-[724px] mx-auto mt-[64px] md:w-[689px] md:h-[706px] lg:w-[1110px] lg:h-[560px]'}>
                    <div className={`flex flex-col  lg:flex-row ${props.isReversed === true ? "lg:flex-row-reverse" : ""} `}>
                    <div className={'w-[327px] h-[352px] bg-customGray rounded-lg flex justify-center items-center w-full lg:w-[540px] lg:h-[560px] '}>
                        <Image src={props.img} alt={"xx"} className={''}/>
                    </div>
                    <div className="mt-[32px] flex flex-col items-center justify-center ">
                        {props.isNew === true && <h6 className="overline text-darkOrange">NEW PRODUCT</h6>}

                        <div className="w-[327px] h-[76px] md:w-[572px] md:h-[88px] flex justify-center mt-[24px]">
                            <h3 className="text-center">{props.title}</h3>
                        </div>
                        <div className={`w-[327px] h-[125px] md:w-[572px] md:h-[75px] flex justify-center mt-[24px] ${props.isReversed === true ? "lg:pr-12" : "lg:pl-12"} `}>
                            <h6 className={'text-black text-opacity-50 text-center'}>{props.description}</h6>
                        </div>
                        <div className={'mt-[24px]'}>
                            <SeeProductButton color={'darkOrange'}  />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}