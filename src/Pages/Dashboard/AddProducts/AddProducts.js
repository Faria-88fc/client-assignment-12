import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProjucts.css'


const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/allproducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    };

    return (
        <div className='pruduct-form'>
            <h2 className='container ms-5 ps-5'>Add Product Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 60 })} placeholder='name' />
                <textarea className='des' {...register("description")} placeholder='add description' />
                <input {...register("img")} placeholder='image url' />
                <input type='number' {...register("price")} placeholder='price' />
                <input className='submit' type="submit" value='Add Product' />
            </form>
        </div>
    )
}


export default AddProducts;