export default function CheckOutItem() {
    return (
        <>
            <div className={'w-[279px] mt-[31px] h-[64px] md:w-[623px] md:h-[64px] lg:w-[284px] lg:h-[64px] flex justify-between'}>
                <div className={'w-[155px] h-[64px] flex '}>
                    <div className={'w-[64px] h-[64px] bg-customGray rounded-lg'}></div>
                    <div className={'w-[75px] h-[50px] ml-4'}>
                        <div className={'w-[75px] h-[25px]'}>
                            <p className={'font-bold'}>XX99 MKII</p>
                        </div>
                        <div className={'w-[px] h-[25px]'}>
                            <p className={'subTitle text-black text-opacity-30'}>$200</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={'subTitle text-black text-opacity-30'}>x1</p>
                </div>
            </div>
        </>
    )
}