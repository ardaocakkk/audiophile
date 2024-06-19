import XX99MARKIIMobile from "@/public/product-xx59-headphones/mobile/category-headphones-1.png";
import CategoryItemCard from "@/app/ui/cards/Category/CategoryItemCard";
import XX99MARKIIMobile2 from "@/public/product-xx59-headphones/mobile/category-headphones-2.png";
import CategoryHeader from "@/app/ui/Layout/Category/CategoryHeader";
import XX99MARKIIMobile3 from "@/public/product-xx59-headphones/mobile/category-headphones-3.png";
import AllCategories from "@/app/ui/cards/Category/AllCategories";
export default function Page() {
    return (
        <>
            <CategoryHeader title={"HEADPHONES"}/>
            <CategoryItemCard isNew={true} img={XX99MARKIIMobile} title={"XX99 Mark II Headphones"}
                              description={"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."}/>
            <div className={'mt-[120px]'}>
            <CategoryItemCard isNew={false} img={XX99MARKIIMobile3} title={"XX99 MARK I HEADPHONES"} description={"As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."}/>
            </div>
            <div className={'mt-[120px]'}>
                <CategoryItemCard isNew={false} img={XX99MARKIIMobile2} title={"XX59 HEADPHONES"} description={"Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."}/>
            </div>
            <div className={'mt-[155px] '}>
                <AllCategories/>
            </div>
        </>
    )
}
