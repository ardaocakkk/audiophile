import CategoryHeader from "@/app/ui/Layout/Category/CategoryHeader";
import Earphone1 from "@/public/product-yx1-earphones/mobile/category-earphones-1.png";
import CategoryItemCard from "@/app/ui/cards/Category/CategoryItemCard";
import AllCategories from "@/app/ui/cards/Category/AllCategories";

export default function Page() {
    return (


        <>

        <CategoryHeader title={"EARPHONES"}/>

            <div className={'mt-[64px]'}>
                <CategoryItemCard isNew={true} img={Earphone1} title={"YX1 WIRELESS\n" +
                    "EARPHONES"} description={"Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."}/>
            </div>
            <div className={'mt-[155px] '}>
                <AllCategories/>
            </div>

        </>
    )
}