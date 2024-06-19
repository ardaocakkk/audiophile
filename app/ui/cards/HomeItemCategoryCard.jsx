import Image from "next/image";
import RightArrow from "@/public/shared/desktop/icon-arrow-right.svg";
import {Icon} from "@mui/material";

export default function HomeItemCategoryCard(props) {
    return (
        <>
            <div className={'h-[165px] md:w-[223px] md:h-[217px] lg:w-[350px] bg-customGray w-full rounded-xl relative'}>
                <div className="absolute inset-0 flex  justify-center">
                    <Image
                        src={props.img}
                        alt="headphone"
                        className="object-contain max-h-full max-w-full"
                        style={{ marginTop: "-80px" }} // Adjust this value as needed
                    />
                </div>
                <div className="absolute inset-0 flex justify-center items-center mt-12">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h5 className="text-black">{props.item}</h5>
                        <div className="flex items-center">
                            <h6 className="text-black hover:text-darkOrange">SHOP</h6>
                            <span className="ml-2"><Image src={RightArrow} alt="asd" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}