"use client";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useState} from "react";
import CheckOutItem from "@/app/ui/cards/Checkout/CheckoutItem";


export default function Checkout() {

    const [eMoneyChecked, setEMoneyChecked] = useState(true);

    const handleEMoneyChange = (event) => {
        if(event.target.value === 'e-Money') {
            setEMoneyChecked(true)
        } else {
            setEMoneyChecked(false)
        }
    }

    return (
        <div className={'w-[327px] flex flex-col  lg:flex-row h-[2022px] mt-[65px] mx-auto md:w-[689px] md:h-[1777px] md:mt-[97px] lg:w-[1110px] lg:h-[1126px] lg:mt-[142px]'}>
            <div className={'w-[327px] h-[1378px] border-2 border-customGray rounded-lg md:w-[689px] pl-6 md:h-[1133px] lg:w-[730px] md:pl-[28px] lg:h-[1126px] lg:pl-[48px]'}>
                <div className={'w-[160px] h-[38px] md:w-[350px] md:h-[36px] mt-6  md:mt-[30px]  lg:mt-[54px] '}>
                    <h3>CHECKOUT</h3>
                </div>
                <div className={'w-[280px] h-[332px] md:w-[635px] md:h-[227px] mt-[32px] md:mt-[41px]'}>
                    <div className={'h-[25px]'}>
                        <h6 className={'text-darkOrange'}>BILLING DETAILS</h6>
                    </div>
                    <div className={'w-[280px] h-[291px] mt-[16px] md:w-[634px] md:h-[186px]  grid grid-cols-1 md:grid-cols-2'}>
                        <div className={'w-[280px] h-[81px] md:w-[309px] md:h-[81px]'}>
                            <h6 className={'text-black font-bold text-md'}>Name</h6>
                            <div className={'w-[280px] h-[56px] md:w-[309px] md:h-[56px] border-customGray border-2 rounded-lg'}>
                            <input type={'text'} className={'mx-auto w-full h-full pl-6'}  placeholder={'Alexei Ward'} />
                            </div>
                        </div>
                        <div className={'w-[280px] h-[81px] mt-6 md:mt-0 md:w-[309px] md:h-[81px]'}>
                            <h6 className={'text-black font-bold text-md'}>Email Address</h6>
                            <div className={'w-[280px] h-[56px] md:w-[309px] md:h-[56px] border-customGray border-2 rounded-lg'}>
                                <input type={'text'} className={'mx-auto w-full h-full pl-6'}  placeholder={'alexei@mail.com'} />
                            </div>
                        </div>
                        <div className={'w-[280px] h-[81px] mt-6 md:w-[309px] md:h-[81px]'}>
                            <h6 className={'text-black font-bold text-md'}>Phone Number</h6>
                            <div className={'w-[280px] h-[56px] md:w-[309px] md:h-[56px] border-customGray border-2 rounded-lg'}>
                                <input type={'text'} className={'mx-auto w-full h-full pl-6'}  placeholder={'+1 202-555-0136'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-[280px] h-[435px] md:w-[634px] md:h-[332px] mt-[32px]'}>
                    <div className={'h-[25px]'}>
                        <h6 className={'text-darkOrange'}>SHIPPING INFO</h6>
                    </div>
                    <div className={'w-[280px] h-[380px] md:w-[634px] md:h-[291px] mt-4'}>
                        <div className={'w-[280px] h-[81px]  md:h-[81px] '}>
                            <h6 className={'text-black font-bold text-md'}>Your Address</h6>
                            <div className={'w-[280px] h-[56px] md:w-[634px] md:h-[56px] border-customGray border-2 rounded-lg'}>
                                <input type={'text'} className={'mx-auto w-full h-full pl-6'}  placeholder={'1137 Williams Avenue'} />
                            </div>
                        </div>
                        <div className={'w-[280px] h-[291px] md:w-[634px] md:h-[186px] grid grid-cols-1 md:grid-cols-2 '}>
                            <div className={'w-[280px] h-[81px] mt-6 md:w-[309px] md:h-[81px]'}>
                                <h6 className={'text-black font-bold text-md'}>Zip Code</h6>
                                <div className={'w-[280px] h-[56px] md:w-[309px] md:h-[56px] border-customGray border-2 rounded-lg'}>
                                    <input type={'text'} className={'mx-auto w-full h-full pl-6'}  placeholder={'10001'} />
                                </div>
                            </div>
                            <div className={'w-[280px] h-[81px] mt-6 md:w-[309px] md:h-[81px]'}>
                                <h6 className={'text-black font-bold text-md'}>City</h6>
                                <div className={'w-[280px] h-[56px] md:w-[309px] md:h-[56px] border-customGray border-2 rounded-lg'}>
                                    <input type={'text'} className={'mx-auto w-full h-full pl-6'}  placeholder={'New York'} />
                                </div>
                            </div>
                            <div className={'w-[280px] h-[81px] mt-6 md:w-[309px] md:h-[81px]'}>
                                <h6 className={'text-black font-bold text-md'}>Country</h6>
                                <div className={'w-[280px] h-[56px] md:w-[309px] md:h-[56px] border-customGray border-2 rounded-lg'}>
                                    <input type={'text'} className={'mx-auto w-full h-full pl-6'}  placeholder={'United States'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'w-[280px] h-[420px] md:w-[635px] md:h-[274px] mt-[32px]'}>
                        <div className={'h-[25px]'}>
                            <h6 className={'text-darkOrange'}>PAYMENT DETAILS</h6>
                        </div>
                        <div className={'w-[280px] h-[379px] md:w-[634px] md:h-[233px] grid grid-cols-1 '}>
                            <FormControl>
                            <div className={'w-[280px] h-[161px] md:w-[634px] md:h-[128px] grid grid-cols-1 md:grid-cols-2'}>
                                <div className={'h-[16px] mt-4 '}>
                                    <FormLabel id={'payment-method-label'}> <h6>Payment Method</h6> </FormLabel>
                                </div>
                                <div className={'w-[280px] h-[128px] md:w-[309px] md:h-[128px] mt-[17px]'}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="e-Money"
                                        name="radio-buttons-group"
                                    >
                                        <div className={'w-[280px] h-[56px] md:w-[309px] md:h-[56px] rounded-lg border-2 border-customGray'}>
                                            <div className={'pl-2'}>
                                                <FormControlLabel
                                                    value="e-Money"
                                                    control={<Radio sx={{ color: '#D87D4A', '&.Mui-checked': { color: '#D87D4A' } }} />}
                                                    label="e-Money"
                                                    onClick={handleEMoneyChange}
                                                />
                                            </div>
                                        </div>

                                        <div className={'w-[280px] h-[56px] md:w-[309px] md:h-[56px] rounded-lg border-2 border-customGray mt-[16px]'}>
                                            <div className={'pl-2'}>
                                                <FormControlLabel
                                                    value="Cash on Delivery"
                                                    control={<Radio sx={{ color: '#D87D4A', '&.Mui-checked': { color: '#D87D4A' } }} />}
                                                    label="Cash on Delivery"
                                                    onClick={handleEMoneyChange}
                                                />
                                            </div>
                                        </div>
                                    </RadioGroup>

                                </div>
                            </div>
                            </FormControl>
                            {eMoneyChecked && (
                                <>
                                    <div className={'w-[280px] h-[186px] mt-[32px] md:w-[634px] md:h-[81px] grid grid-cols-1 md:grid-cols-2'}>
                                        <div className={'w-[280px] h-[81px]  md:w-[309px] md:h-[81px]'}>
                                            <p className={'text-black font-bold text-md'}>e-Money Number</p>
                                            <div className={'w-[280px] h-[56px] md:w-[309px] md:h-[56px] border-customGray border-2 rounded-lg'}>
                                                <input type={'text'} className={'mx-auto w-full h-full pl-6'}  placeholder={'238521993'} />
                                            </div>
                                        </div>
                                        <div className={'w-[280px] h-[81px] md:w-[309px] md:h-[81px]'}>
                                            <p className={'text-black font-bold text-md'}>e-Money PIN</p>
                                            <div className={'w-[280px] h-[56px] md:w-[309px] md:h-[56px] border-customGray border-2 rounded-lg'}>
                                                <input type={'text'} className={'mx-auto w-full h-full pl-6'}  placeholder={'6891'} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <div className={'w-[327px] border-2 border-customGray rounded-lg mt-[32px] pl-6 h-[612px] md:w-[689px] lg:pl-[48px] md:pl-[28px] md:h-[612px] lg:w-[350px] lg:h-[612px] mx-0 lg:ml-[30px]'}>
                <div className={'w-[279px] h-[548px] mt-[32px] md:w-[689px] md:h-[612px] lg:w-[284px] lg:h-[548px] '}>
                    <div className={'h-[25px]'}><h3>SUMMARY</h3></div>
                    <div className={'w-[279px] mt-[31px] h-[492px] md:w-[623px] md:h-[492px] lg:w-[284px] lg:h-[492px]'}>
                        <CheckOutItem/>
                        <CheckOutItem/>
                        <CheckOutItem/>
                        <div className={'w-[279px] mt-[32px] h-[220px] md:w-[623px] md:h-[220px] lg:w-[284px] lg:h-[220px] '}>
                            <div className={'flex-row w-[279px] h-[140px] md:w-[623px] lg:w-[284px] '}>
                                <div className={'w-[279px] h-[25px] md:w-[623px] md:h-[25px] lg:w-[284px] lg:h-[25px] flex justify-between'}>
                                    <div className={'w-[46px] h-[25px]'}> <p className={'text-black text-opacity-30'}>TOTAL</p> </div>
                                    <div> <p className={'font-bold'}> $ 5,396 </p></div>
                                </div>
                                <div className={'w-[279px] h-[25px] md:w-[623px] md:h-[25px] lg:w-[284px] lg:h-[25px] flex justify-between'}>
                                    <div className={'w-[279px] h-[25px] md:w-[623px] md:h-[25px] lg:w-[284px] lg:h-[25px] flex justify-between'}>
                                        <div className={'w-[46px] h-[25px]'}> <p className={'text-black text-opacity-30'}>SHIPPING</p> </div>
                                        <div> <p className={'font-bold'}> $ 50 </p></div>
                                    </div>
                                </div>
                                <div className={'w-[279px] h-[25px] md:w-[623px] md:h-[25px] lg:w-[284px] lg:h-[25px] flex justify-between'}>
                                    <div className={'w-[279px] h-[25px] md:w-[623px] md:h-[25px] lg:w-[284px] lg:h-[25px] flex justify-between'}>
                                        <div className={'w-[114px] h-[25px]'}> <p className={'text-black text-opacity-30'}>VAT (INCLUDED)</p> </div>
                                        <div> <p className={'font-bold'}> $ 1,079</p></div>
                                    </div>
                                </div>

                                <div className={'w-[279px] mt-7 h-[25px] md:w-[623px] md:h-[25px] lg:w-[284px] lg:h-[25px] flex justify-between'}>
                                    <div className={'w-[279px] h-[25px] md:w-[623px] md:h-[25px] lg:w-[284px] lg:h-[25px] flex justify-between'}>
                                        <div className={'w-[114px] h-[25px]'}> <p className={'text-black text-opacity-30'}>GRAND TOTAL</p> </div>
                                        <div > <p className={'font-bold text-darkOrange'}> $ 5,446 </p></div>
                                    </div>
                                </div>

                            </div>
                            <div className={'w-[279px] h-[48px] md:w-[623px] md:h-[48px] lg:w-[284px] lg:h-[48px] bg-darkOrange flex justify-center items-center mx-auto'}>
                                <button className={'w-full h-full'}> <h6 className={'text-white'}>CONTINUE & PAY</h6></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}