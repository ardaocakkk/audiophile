"use client";
import {useFormik} from "formik";
import axios from "axios";
import {IconButton} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "@/lib/features/auth/AuthAction";
import {redirect} from "next/navigation";
import AuthenticationHook from "@/app/ui/hooks/AuthenticationHook";

export default function Home() {

    const {loading, userInfo, error, success} = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
            dispatch(loginUser(values));
        },

    })


    const isAuthenticated = AuthenticationHook()

    useEffect(() => {
        if(isAuthenticated === true) {
            redirect('/')
        }
    }, [isAuthenticated]);




    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const getAuthenticatedUser =() => {
        axios.get({
            headears: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            url: 'http://localhost:8080/user/me'
        }).then(response => {
            console.log(response.data)
        })
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"/>
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
                    <button type="submit" className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Login</button>
                </form>
            </div>
        </div>
    )
}