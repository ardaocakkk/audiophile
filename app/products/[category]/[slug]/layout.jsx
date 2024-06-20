"use client";
import { useEffect, useState } from "react";
import YAMLCard from "@/app/ui/cards/Products/YAML/YAMLCard";
import AllCategories from "@/app/ui/cards/Category/AllCategories";

export default function ProductLayout({ children }) {
    const [device, setDevice] = useState('');

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width >= 1024) {
                setDevice('desktop');
            } else if (width < 1024 && width >= 768) {
                setDevice('tablet');
            } else {
                setDevice('mobile');
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div>{children}</div>

            <div className="h-[683px] mt-[120px]">
                <AllCategories />
            </div>
        </div>
    );
}