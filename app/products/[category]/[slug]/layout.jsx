"use client";
import { useEffect, useState } from "react";
import YAMLCard from "@/app/ui/cards/Products/YAML/YAMLCard";
import AllCategories from "@/app/ui/cards/Category/AllCategories";
import useDeviceType from "@/app/ui/hooks/DeviceHook";

export default function ProductLayout({ children }) {
    const device = useDeviceType();

    return (
        <div>
            <div>{children}</div>


            <div className="h-[683px] mt-[120px] md:w-[689px] md:h-[217px]   lg:w-[1110px]  flex justify-center items-center mx-auto ">
                <AllCategories />
            </div>
        </div>
    );
}