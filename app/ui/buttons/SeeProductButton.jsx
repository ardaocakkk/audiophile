import Link from "next/link";

export default function SeeProductButton(props) {
    return <>
        <Link href={`${props.href}`}>
        <div className={`w-[160px] h-[48px] bg-${props.color} transition duration-500 ${props.color === "black" ? "hover:bg-lightGray" : "hover:bg-lightOrange"} mt-[28px] flex items-center justify-center`}>
            <p className="subTitle text-customGray">SEE PRODUCT</p>
        </div>
        </Link>
    </>
}