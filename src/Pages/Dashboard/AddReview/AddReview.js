import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';


const AddReview = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };

    const {user} = useAuth();

        return (
            <div>
                <h2 className='container ms-5 ps-5'>Add Your Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 60 }) } placeholder={user.displayName}/>
                    <textarea className='des' {...register("comment")} placeholder='Write Your Comment Here' />
                    <input type='number' {...register("rating",
                    { required: true, maxLength: 5 })} placeholder='type rating' />
                    <input className='submit' type="submit" value='Submit' />
                </form>
            </div>
        );
    };

    export default AddReview;