"use client";
import ProductCard from "@/app/ui/cards/Products/ProductCard";
import data from "@/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import YAMLCard from "@/app/ui/cards/Products/YAML/YAMLCard";
import AllCategories from "@/app/ui/cards/Category/AllCategories";

export default function Page({ params }) {
    const product = data.find((product) => product.slug === String(params.slug) && product.category === String(params.category));
    const [img, setImg] = useState();
    const [galleryFirst, setGalleryFirst] = useState();
    const [gallerySecond, setGallerySecond] = useState();
    const [galleryThird, setGalleryThird] = useState();
    const [device, setDevice] = useState('');

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width >= 1024) {
                setDevice('desktop');
                setImg(product.image.desktop);
                setGalleryFirst(product?.gallery?.first?.desktop);
                setGallerySecond(product.gallery.second.desktop);
                setGalleryThird(product.gallery.third.desktop);
            } else if (width < 1024 && width >= 768) {
                setDevice('tablet');
                setImg(product.image.tablet);
                setGalleryFirst(product.gallery.first.tablet);
                setGallerySecond(product.gallery.second.tablet);
                setGalleryThird(product.gallery.third.tablet);
            } else {
                setDevice('mobile');
                setImg(product?.image?.mobile);
                setGalleryFirst(product.gallery.first.mobile);
                setGallerySecond(product.gallery.second.mobile);
                setGalleryThird(product.gallery.third.mobile);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [product]);

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <>
        <ProductCard
            img={img}
            product={product}
            galleryFirst={galleryFirst}
            gallerySecond={gallerySecond}
            galleryThird={galleryThird}
        />





        </>

    );
}