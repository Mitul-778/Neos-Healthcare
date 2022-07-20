import React from "react";
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { SignUp } from '../components/SignUp'


export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
    )
}