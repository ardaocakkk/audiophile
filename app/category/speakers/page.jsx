"use client";
import CategoryHeader from "@/app/ui/Layout/Category/CategoryHeader";
import data from "@/data";
import AllCategories from "@/app/ui/cards/Category/AllCategories";
import {useEffect, useState} from "react";
import CategoryItemCard from "@/app/ui/cards/Category/CategoryItemCard";

export default function Page() {
    const [device, setDevice] = useState('');
    const speakers = []
    data.map((item) => {
        if(item.category === "speakers") {
            speakers.push(item)
        }
    })
    speakers.reverse();
    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if(width >= 1024) {
                setDevice('desktop')
            }
            else if(width <1024 && width >= 768) {
                setDevice('tablet')
            }
            else {
                setDevice('mobile')
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);



    }, []);

    const getImage = (product) => {
        if (device === 'desktop') {
            return product.image.desktop;
        } else if (device === 'tablet') {
            return product.image.tablet;
        } else {
            return product.image.mobile;
        }
    };
    return <>
        <CategoryHeader title={"SPEAKERS"}/>
        {speakers.map((item) => {
            const image = getImage(item);
            return <CategoryItemCard key={item.id} isReversed={item.id % 2 === 0 ? true : false} href={`/products/${item.category}/${item.slug}`} isNew={item.new} img={image} title={item.name} description={item.description}/>
        })}
        <div className={'  mt-[155px]  h-[683px] md:h-[217px] lg:h-[284px]'}>
            <AllCategories/>
        </div>
    </>
}