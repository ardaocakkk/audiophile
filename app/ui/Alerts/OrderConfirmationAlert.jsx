import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import Image from "next/image";
import {useSelector, useDispatch} from "react-redux";
import { useRouter } from 'next/navigation'
import {clearCart} from "@/lib/features/CartSlice";
const smDeviceStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 327,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function OrderConfirmationAlert({isOpen, onClose, grandTotal}) {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const firstItem = cartItems[0];
    const router = useRouter()
    const dispatch = useDispatch();


    if (!isOpen) return null;


    const backToHome = async () => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(2000);
        onClose();
        router.push('/')
        dispatch(clearCart());
    }

    return (
        <>
            <div>
                <Modal
                    open={isOpen}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className={"h-screen flex justify-center items-center"}>
                        <div className={"w-[327px] h-[600px] md:w-[540px] md:h-[581px] bg-white rounded-lg"}>
                            <div className={"mt-[32px] w-full ml-[32px]"}>
                                <div className="relative w-[64px] h-[64px] bg-darkOrange rounded-full flex justify-center items-center">
                                    <div className="relative w-[23px] h-[16px]">
                                        <Image
                                            src="/icons/swoosh.png"
                                            alt="Centered image"
                                            layout="fill"
                                            objectFit="contain"
                                            className="rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className={'w-[263px]  h-[56px] md:w-[284px] md:h-[72px] mt-[23px]'}>
                                    <h3>THANK YOU FOR YOUR ORDER</h3>
                                </div>
                                <div className={'w-[263px] h-[50px] md:w-[444px] md:h-[25px] mt-4'}>
                                    <p className={'text-black text-opacity-30'}>You will receive an email confirmation shortly.</p>
                                </div>
                                <div className={'w-[263px] h-[232px] md:w-[444px] md:h-[140px] flex flex-col md:flex-row '}>
                                    <div className={'w-[263px] h-[140px] bg-customGray rounded-tl-lg rounded-tr-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg'}>
                                        <div className={'w-[204px] h-[91px] md:w-[198px] md:h-[92px] flex justify-between items-center mx-auto'}>
                                            {cartItems.length > 1 ?
                                                (
                                                    <>
                                                        <div className={'flex flex-col'}>
                                                    <div className={'w-[204px] h-[50px] flex justify-between mx-auto mb-[12px] mt-[24px]'}>
                                                        <div className={'w-[28px] h-[32px]'}>
                                                            <div className={'w-[28px] h-[32px] relative'}>
                                                                <Image
                                                                    src={firstItem.image}
                                                                    alt="Centered image"
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                    className="rounded-lg"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={'w-[75px] h-[50px] flex flex-col'}>
                                                            <div className={'h-[25px] w-[75px]'}>
                                                                <h2 className={' text-sm '}>{firstItem.name}</h2>
                                                            </div>
                                                            <div className={'h-[25px] w-[75px]'}>
                                                                <h3 className={'text-sm text-black font-bold text-opacity-30'}>$ {firstItem.price}</h3>
                                                            </div>
                                                        </div>
                                                        <div className={''}>
                                                            <p className={'text-black font-bold text-opacity-30'}>x{firstItem.quantity}</p>
                                                        </div>
                                                    </div>
                                                           <div className={'w-[215px] h-[1px] border-1 rounded-lg bg-black bg-opacity-30 '}></div>
                                                            <div className={'mx-auto h-[16px]'}>
                                                                <p className={'text-black text-opacity-30 pt-[12px]'}>
                                                                    and {cartItems.length - 1} other item(s)
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </>

                                                )
                                                :
                                                (
                                                    <div className={'w-[204px] h-[50px] flex justify-between mx-auto'}>
                                                        <div className={'w-[28px] h-[32px]'}>
                                                            <div className={'w-[28px] h-[32px] relative'}>
                                                                <Image
                                                                    src={firstItem.image}
                                                                    alt="Centered image"
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                    className="rounded-lg"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={'w-[75px] h-[50px] flex flex-col'}>
                                                            <div className={'h-[25px] w-[75px]'}>
                                                                <h2 className={' text-sm'}>{firstItem.name}</h2>
                                                            </div>
                                                            <div className={'h-[25px] w-[75px]'}>
                                                                <h3 className={'text-sm text-black font-bold text-opacity-30'}>$ {firstItem.price}</h3>
                                                            </div>
                                                        </div>
                                                        <div className={''}>
                                                            <p className={'text-black font-bold text-opacity-30'}>x {firstItem.quantity}</p>
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                    <div className={'w-[263px] h-[92px] md:w-[198px] md:h-[140px] bg-black rounded-bl-lg rounded-br-lg md:rounded-none md:rounded-tr-lg md:rounded-br-lg'}>
                                        <div className={'w-[134px] h-[58px] flex flex-col justify-center ml-[24px] mt-[15px] md:mt-[41px]'}>
                                            <div>
                                                <h1 className={'text-white text-opacity-30 text-sm underline'}>Grand Total</h1>
                                            </div>
                                            <div className={'mt-[8px]'}>
                                                <h6 className={'text-white'}>$ {grandTotal} </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={'w-[263px] h-[48px] md:w-[444px] md:h-[48px] bg-darkOrange mt-[46px] flex justify-center items-center'}>
                                  <button onClick={backToHome} className={'w-full h-full'}>  <h2 className={'text-white text-sm'}>Back To Home</h2></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}