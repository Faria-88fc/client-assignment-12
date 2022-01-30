import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';


const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://desolate-scrubland-90880.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };

    const { user } = useAuth();

    return (
        <div>
            <h2 className='container ms-5 ps-5 text-center'>Add Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-wrap justify-content-center align-items-center flex-column'>
                <input className='p-2 mb-2 w-50 des rounded' {...register("name", { required: true, maxLength: 60 })} defaultValue={user?.displayName} required />
                <input className='p-2 w-50 des rounded' {...register("email", { required: true, maxLength: 60 })} defaultValue={user?.email} required />
                <textarea className='des w-50' {...register("comment")} placeholder='Write Your Comment Here' />
                <input className='des w-50 p-2 rounded' type='number' {...register("rating",
                    { required: true, maxLength: 5 })} placeholder='give rating' />
                <input className='submit px-5 w-50 m-4' type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default AddReview;