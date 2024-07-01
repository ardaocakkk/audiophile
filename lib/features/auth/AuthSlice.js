"use client";
import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {getCurrentUser, loginUser, registerUser} from "@/lib/features/auth/AuthAction";

const userToken = localStorage  !== "undefined" ? localStorage.getItem('token') : null





const initialState = {
    loading: false,
    userInfo: {},
    userToken : null,
    error: null

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true  ;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userToken = action.payload.token;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(getCurrentUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
        });
        builder.addCase(getCurrentUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

    }
 })

export default authSlice.reducer