import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addATodo } from "../redux/todo/action";
import { AllTodo } from "./AllTodo";

export const Home = () =>{
    const dispatch = useDispatch();
    const [todo,setTodo] = useState({});
    const handleChange = (e)=>{
        setTodo({...todo,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addATodo(todo));
        setTodo({});
    }
    return(
        <>
        <div>
            <input type="text" name="title" onChange={handleChange} placeholder="Add Todo" />
            <select name="status" id="">
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
            <button onClick={handleSubmit}>ADD</button>
        </div>
        <AllTodo/>
        </>
    )
}