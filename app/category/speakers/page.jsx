import CategoryHeader from "@/app/ui/Layout/Category/CategoryHeader";
import CategoryItemCard from "@/app/ui/cards/Category/CategoryItemCard";
import Speaker1 from "@/public/product-zx7-speaker/mobile/category-speaker-1.png"
import Speaker2 from "@/public/product-zx9-speaker/mobile/category-speaker-2.png"
import AllCategories from "@/app/ui/cards/Category/AllCategories";

export default function Page() {
    return <>
        <CategoryHeader title={"SPEAKERS"}/>
        <div className={'mt-[64px]'}>
            <CategoryItemCard isNew={true} img={Speaker1} title={"ZX9 SPEAKER"} description={"Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."}/>
        </div>
        <div className={'mt-[120px]'}>
            <CategoryItemCard isReversed={true} isNew={false} img={Speaker2} title={"ZX7 SPEAKER"} description={"Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."}/>
        </div>
        <div className={'  mt-[155px]  h-[683px] md:h-[217px] lg:h-[284px]'}>
            <AllCategories/>
        </div>
    </>
}