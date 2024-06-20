export default function AddToCartButton() {
    return (
        <>
            <div className={'flex  mx-auto items-center justify-between mt-[31px] md:justify-start '}>
                <div className={'w-[120px] h-[48px] bg-customGray flex justify-between  items-center'}>
                    <p className={'px-2'}>-</p>
                    <p>quantity</p>
                    <p className={'px-2'}>+</p>

                </div>
                <button className={'w-[160px] h-[48px] bg-darkOrange text-white md:ml-2 hover:bg-lightOrange transition duration-500 '}>ADD TO CART</button>
            </div>
        </>
    )
}