export default function CategoryHeader(props) {
    return (
        <>
            <div className={'w-full h-[85px] bg-black'}>
                <div className="w-full h-[85px] bg-black flex justify-center items-center">
                    <h4 className="text-white">{props.title}</h4>
                </div>
            </div>
        </>
    )
}