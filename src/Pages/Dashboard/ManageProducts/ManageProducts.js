import React, { useEffect, useState } from 'react';



const ManageProducts = () => {
    const [allproducts, setAllproducts] = useState([]);
    const [control, setControl] = useState(false)

    useEffect(() => {
        fetch('https://desolate-scrubland-90880.herokuapp.com/allproducts')
            .then((res) => res.json())
            .then((data) => setAllproducts(data));

    }, []);
    const handleDelete = (id) => {
        if (id) { (window.confirm('Are you sure you want to delete this item?')) };

        fetch(`https://desolate-scrubland-90880.herokuapp.com/deleteproducts/${id}`, {
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
        <div className='container'>
            <div className='row '>
                {
                    allproducts.map(ad => (

                        <div className='col-md-3 g-4 m-3'>
                            <div>
                                <img className='w-100 h-100 rounded' src={ad?.img} alt="" />
                            </div>
                            <div>
                                <h5>{ad?.name}</h5>
                                <small>{ad?.description}</small>
                                <h5 className='text-primary'><span className='fw-bold '>BDT</span> {ad?.price}</h5>

                                <button onClick={
                                    () => handleDelete(ad._id)} className='submit px-5'>Delete</button>
                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
};

export default ManageProducts;