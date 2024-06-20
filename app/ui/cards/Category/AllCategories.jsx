import HomeItemCategoryCard from "@/app/ui/cards/HomeItemCategoryCard";
import xx99MarkIIMobile from "@/public/shared/desktop/image-category-thumbnail-headphones.png";
import imageThumbnailSpeakers from "@/public/shared/desktop/image-category-thumbnail-speakers.png";
import imageThumbnailEarphones from "@/public/shared/desktop/image-category-thumbnail-earphones.png";
import Link from "next/link";

export default function AllCategories(props) {
    return (
        <>

            <div className={'w-[327px] grid grid-cols-1  mx-auto h-[217px] mt-[92px] md:w-[689px] md:px-[40px] md:mt-[96px]  md:grid md:grid-cols-3 md:m-0 lg:gap-28 lg:w-[1110px] lg:justify-items-center lg:mx-auto '}>
                <Link href={'/category/headphones'}>  <HomeItemCategoryCard img={xx99MarkIIMobile} item={"HEADPHONES"} link={'/category/headphones'} /></Link>
                <div className={'mt-[100px] md:m-0 md:ml-7 '}>
                   <Link href={'/category/speakers'}> <HomeItemCategoryCard img={imageThumbnailSpeakers} item={"SPEAKERS"}  /></Link>
                </div>
                <div className={'mt-[100px] md:m-0 md:ml-14 md:mr-6'}>
                  <Link href={"/category/earphones"} >  <HomeItemCategoryCard img={imageThumbnailEarphones} item={"EARPHONES"} /> </Link>
                </div>
            </div>
        </>
    )
}