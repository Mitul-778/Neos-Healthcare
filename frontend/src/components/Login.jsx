import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login  = () =>{
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const handleChange = (e)=>{
        const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    }
    return(
        <div>
            <input type="text" name="email" placeholder="Email" onChange={handleChange} id="" />
            <input type="text" name="password" placeholder="Password" onChange={handleChange} />
            <button onClick={navigate("/")}>Login</button>
            <p>Don't have an Account <Link to={"/signup"}>Sign-Up</Link> </p>
        </div>
    )
}