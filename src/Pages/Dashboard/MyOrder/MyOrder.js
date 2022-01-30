import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const email = user?.email;
    const [myorders, setMyorders] = useState([]);
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch(`https://desolate-scrubland-90880.herokuapp.com/orders/${email}`)
            .then((res) => res.json())
            .then((data) => setMyorders(data));

    }, [control, email]);


    const handleDelete = (id) => {
        if (id) { (window.confirm('want to remove this product?')) };

        fetch(`https://desolate-scrubland-90880.herokuapp.com/deleteorders/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount) {
                    setControl(!control);
                }
            });
    }
    return (
        <div>
            <div className='row container'>
                {
                    myorders.map(mo => (

                        <div className='col-md-3 g-4 m-3'>
                            <div>
                                <p className='text-primary fw-bold'>Order Status: {mo?.status}</p>
                                <img className='w-100 h-100 rounded' src={mo?.pdimg} alt="" />
                            </div>
                            <div>
                                <h3>{mo?.pdname}</h3>
                                <h5 className='text-primary'><small>Cost per Head </small> <span className='fw-bold fs-3'>৳</span> {mo?.pdprice}</h5>

                                <button onClick={
                                    () => handleDelete(mo._id)} className='submit'>Cancel</button>
                            </div>

                        </div>

                    ))
                }

            </div>
        </div>
    );
};

export default MyOrder;