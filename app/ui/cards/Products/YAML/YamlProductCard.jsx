"use client";

import SeeProductButton from "@/app/ui/buttons/SeeProductButton";
import Image from "next/image";
import Link from "next/link";


export default function YAMLProductCard(props) {
    return (
        <>
            <div className={'grid grid-cols-1  w-full  mt-[40px]'}>
                <Link href={`/products/${props.product.category}/${props.product.slug}`}>
                <div className={'w-[327px] h-[265px] md:w-[223px] md:h-[471px]'}>
                    <div className={'w-[327px] h-[120px] md:w-[223px] md:h-[318px] items-center justify-center flex  bg-customGray rounded-lg'}>
                        <div className={'relative w-[73px] h-[95px] md:w-[133px] md:h-[191px] mx-auto '}>
                            <Image
                                src={props.productImg}
                                alt="Centered image"
                                layout="fill"
                                objectFit="contain"
                                className="justify-center items-center rounded-lg"
                            />
                        </div>
                    </div>
                    <div className={'flex flex-col justify-center items-center mt-[32px]'}>
                        <h2 className={'md:text-center'}>{props.product.name}</h2>
                        <div className={'flex justify-center'}>
                            <SeeProductButton color={'darkOrange'} />
                        </div>
                    </div>
                </div>
                </Link>
            </div>

        </>
    )
}