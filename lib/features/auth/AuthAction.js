import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const backendUrl = 'http://localhost:8080';


export const registerUser = createAsyncThunk(
    'auth/register',
    async ({email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${backendUrl}/auth/register`,
                {email, password },
                config
            )
        } catch (error) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({email, password}, {rejectWithValue}) => {
        let responseData = null;
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const response = await axios.post(
                `${backendUrl}/auth/login`,
                {email, password},
                config
            ).then(response => {
                localStorage.setItem("token", response.data.token);
                responseData = response.data;
            })

            return responseData;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const getCurrentUser = createAsyncThunk(
    "user/me",
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('token') || '';
            const response = await axios.get(
                "http://localhost:8080/user/me",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        }catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)

