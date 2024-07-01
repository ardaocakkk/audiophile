"use client";
import {Formik, useFormik} from "formik";
import Button from "@mui/material/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useEffect, useState} from "react";
import {IconButton} from "@mui/material";
import AlertModal from "@/app/register/Modal/AlertModal";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {registerUser} from "@/lib/features/auth/AuthAction";
import {redirect} from "next/navigation";
import AuthenticationHook from "@/app/ui/hooks/AuthenticationHook";

export default function Home() {

    const {loading,userInfo, error, success} = useSelector(state => state.auth);
    const dispatch = useDispatch();



    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: values => {
            console.log(values);
            dispatch(registerUser(values));
        },
    });




    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [isPasswordMatched, setIsPasswordMatched] = useState(false);
    useEffect(() => {
        if (formik.values.password !== formik.values.confirmPassword) {
            setIsPasswordMatched(false);
        } else {
            setIsPasswordMatched(true);
        }
    }, [formik.values.password, formik.values.confirmPassword]);

    const [kvkk, setKvkk] = useState(false);


    const isAuthenticated = AuthenticationHook();
    useEffect(() => {
        if(isAuthenticated === true) {
            redirect('/');
        }
    },[isAuthenticated])

    return (
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
                <form onSubmit={formik.handleSubmit} >
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id={'email'}
                            name={'email'}
                            type={'email'}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-darkOrange"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative flex items-center justify-between">
                            <input
                                id={'password'}
                                name={'password'}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                type={showPassword ? 'text' : 'password'}
                                required
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-darkOrange"
                            />
                            <div className={'absolute right-0 justify-end'}>
                            <IconButton

                                onClick={handleClickShowPassword}
                            >
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <div className={'flex relative items-center'}>
                        <input
                            type={'password'}
                            id={'confirmPassword'}
                            name={'confirmPassword'}
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                            required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:border-darkOrange"/>
                        </div>
                        {!isPasswordMatched && <p className={'text-red-500 text-sm'}>Password does not match</p>}
                    </div>
                    <AlertModal kvkk={kvkk} setKvkk={setKvkk} />
                    <div className={'w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900 '}>
                    <Button
                        disabled={!kvkk}
                        type="submit"
                        className={'w-full text-white'}
                    >
                        <h2 className={'text-white text-sm'}>REGISTER</h2>
                    </Button>
                    </div>

                </form>
            </div>
        </div>
        </>
    )
}