"use client";

import XX99MARKIIMobile from "@/public/product-xx59-headphones/mobile/category-headphones-1.png";
import CategoryItemCard from "@/app/ui/cards/Category/CategoryItemCard";
import xx59Mobile from "@/public/product-xx59-headphones/mobile/category-headphones-2.png";
import CategoryHeader from "@/app/ui/Layout/Category/CategoryHeader";
import XX99MARKIMobile from "@/public/product-xx59-headphones/mobile/category-headphones-3.png";
import AllCategories from "@/app/ui/cards/Category/AllCategories";
import {useEffect, useState} from "react";
//For Tablets
//Headphones
import XX99MARKIIMobile2Tablet from  "@/public/product-xx99-mark-two-headphones/tablet/category-headphones-1-tablet.png";
import XX99MARKITablet from "@/public/product-xx99-mark-one-headphones/tablet/category-headphones-3-tablet.png";
import xx59Tablet from "@/public/product-xx59-headphones/tablet/category-headphones-2-tablet.png";

//For Desktop
import XX99MARKIIDesktop from "@/public/product-xx99-mark-two-headphones/desktop/category-headphones-1-desktop.png";
import XX99MARKIDesktop from "@/public/product-xx99-mark-one-headphones/desktop/category-headphones-3-desktop.png";
import XX59Desktop from "@/public/product-xx59-headphones/desktop/category-headphones-2-desktop.png";



export default function Page() {

    const [xx99MarkTwo, setXx99MarkTwo] = useState();
    const [xx99MarkOne, setXx99MarkOne] = useState();
    const [xx59, setXx59] = useState();

    useEffect(() => {
        const width = window.innerWidth;
        if(width >= 1024) {
            setXx99MarkTwo(XX99MARKIIDesktop);
            setXx99MarkOne(XX99MARKIDesktop);
            setXx59(XX59Desktop)
        }
        else if(width <1024 &&  width > 768) {
            setXx99MarkTwo(XX99MARKIIMobile2Tablet);
            setXx99MarkOne(XX99MARKITablet);
            setXx59(xx59Tablet)
        }
        else {
            setXx99MarkTwo(XX99MARKIIMobile);
            setXx99MarkOne(XX99MARKIMobile)
            setXx59(xx59Mobile)
        }
    }, []);
    return (
        <>
            <CategoryHeader title={"HEADPHONES"}/>
            <CategoryItemCard isReversed={false} isNew={true} img={xx99MarkTwo} title={"XX99 Mark II Headphones"}
                              description={"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."}/>
            <div className={'mt-[120px]'}>
            <CategoryItemCard isReversed={true} isNew={false} img={xx99MarkOne} title={"XX99 MARK I HEADPHONES"} description={"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."}/>
            </div>
            <div className={'mt-[120px]'}>
                <CategoryItemCard isReversed={false} isNew={false} img={xx59} title={"XX59 HEADPHONES"} description={"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."}/>
            </div>
            <div className={'mt-[155px]  h-[683px] md:h-[217px] lg:h-[284px]  '}>
                <AllCategories/>
            </div>
        </>
    )
}
