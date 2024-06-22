import Image from "next/image";


export default function CashOnDeliveryIcon() {
    return (
        <>
            <div className={'w-[48px] h-[48px] relative'}>
            <Image layout="fill" objectFit="contain" src={"/icons/cash-on-delivery-icon.png"} alt={"delivery icon"}/>
            </div>
        </>
    )
}