import React, { useState } from 'react';

const AddAdmin = () => {
    const [email, setEmail] = useState('');

    const handleonBlur = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e => {
        const user = { email };
        fetch('https://desolate-scrubland-90880.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })



        e.preventDefault();
    }
    return (
        <div className='text-center pb-5 mb-5'>
            <h1>Make an admin</h1>
            <form onSubmit={handleMakeAdmin}>
                <input onBlur={handleonBlur} type="email" placeholder='email@' />
                <button type="submit" className='bg-danger p-1'>Make Admin</button>
            </form>


        </div>
    );
};

export default AddAdmin;