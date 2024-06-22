import {useState} from "react";

export default function BasicForm(props) {

    const [formData, setFormData] = useState('');



    return (
        <>
            <div className={'w-[280px] h-[81px] md:w-[309px] md:h-[81px]'}>
                <h6 className={'text-black font-bold text-md'}>{props.formLabel}</h6>
                <div className={'w-[280px] h-[56px] md:w-[309px] md:h-[56px] border-customGray border-2 rounded-lg'}>
                    <input type={'text'} className={'mx-auto w-full h-full pl-6'}  placeholder={props.placeHolder} />
                </div>
            </div>
        </>
    )
}