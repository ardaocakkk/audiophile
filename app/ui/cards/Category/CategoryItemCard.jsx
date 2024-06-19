import Image from "next/image";
import XX99MARKIIMobile from "@/public/product-xx59-headphones/mobile/category-headphones-1.png";
import SeeProductButton from "@/app/ui/buttons/SeeProductButton";

export default function CategoryItemCard(props) {
    return (
        <>
            <div>

                <div className={'w-[327px] h-[724px] mx-auto mt-[64px] md:w-[689px] md:h-[706px]'}>
                    <div className={'w-[327px] h-[352px] bg-customGray rounded-lg flex justify-center items-center w-full'}>
                        <Image src={props.img} alt={"xx"}/>
                    </div>
                    <div className="mt-[32px] flex flex-col items-center justify-center ">
                        {props.isNew === true && <h6 className="overline text-darkOrange">NEW PRODUCT</h6>}

                        <div className="w-[327px] h-[76px] md:w-[572px] md:h-[88px] flex justify-center mt-[24px]">
                            <h3 className="text-center">{props.title}</h3>
                        </div>
                        <div className={'w-[327px] h-[125px] md:w-[572px] md:h-[75px] flex justify-center mt-[24px]'}>
                            <h6 className={'text-black text-opacity-50 text-center'}>{props.description}</h6>
                        </div>
                        <div className={'mt-[24px]'}>
                            <SeeProductButton color={'darkOrange'}  />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}