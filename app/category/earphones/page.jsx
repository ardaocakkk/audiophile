"use client";
import CategoryHeader from "@/app/ui/Layout/Category/CategoryHeader";
import Earphone1 from "@/public/product-yx1-earphones/mobile/category-earphones-1.png";
import CategoryItemCard from "@/app/ui/cards/Category/CategoryItemCard";
import AllCategories from "@/app/ui/cards/Category/AllCategories";
import data from "@/data";
import {useEffect, useState} from "react";


export default function Page() {
    const [device, setDevice] = useState('');
    const earphones= []
    data.map((item) => {
        if(item.category === "earphones") {
            earphones.push(item)
        }
    })
    earphones.reverse();

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
            console.log("dekstoplar icin ", product.image.desktop)
            return product.image.desktop;
        } else if (device === 'tablet') {
            return product.image.tablet;
        } else {
            return product.image.mobile;
        }
    };

    return (


        <>

        <CategoryHeader title={"EARPHONES"}/>

            <div className={'mt-[64px]'}>
                {/*<CategoryItemCard isNew={true} img={Earphone1} title={"YX1 WIRELESS\n" +*/}
                {/*    "EARPHONES"} description={"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."}/>*/}
                {earphones.map((item) => {
                    const image = getImage(item);
                    return <CategoryItemCard key={item.id} img={image} title={item.name} description={item.description} href={`/products/${item.category}/${item.slug}`}/>
                })}
            </div>
            <div className={'mt-[155px]  h-[683px] md:h-[217px] lg:h-[284px] '}>
                <AllCategories/>
            </div>

        </>
    )
}