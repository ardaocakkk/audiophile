"use client";
import SeeProductButton from "@/app/ui/buttons/SeeProductButton";
import YAMLProductCard from "@/app/ui/cards/Products/YAML/YamlProductCard";
import {useEffect, useState} from "react";
import useDeviceType from "@/app/ui/hooks/DeviceHook";

export default function YAMLCard(props) {
    const device = useDeviceType();
    const getImage = (product) => {
        if (device === 'desktop') {
            return product.image.desktop;
        } else if (device === 'tablet') {
            return product.image.tablet;
        } else {
            return product.image.mobile;
        }
    };
    return (
        <>

            <div className={'flex flex-col mt-[120px] w-[327px] h-[983px] md:w-[691px] md:h-[563px] lg:w-[1110px] lg:h-[571px]  items-center m-auto'}>
                <div className={'mx-auto items-center justify-center flex'}>
                    <h3> YOU MAY ALSO LIKE</h3>
                </div>
                <div className={'grid  grid-cols-1 md:grid-cols-3 '}>
                {props.product?.others?.map((product) => {
                    const image = getImage(product);
                    console.log(image);
                    console.log(product);
                    return (
                        <>
                            <YAMLProductCard product={product} productImg={image}  />
                        </>
                    )
                })}
                </div>
            </div>


        </>
    )
}