import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Purchase.css'
import useAuth from '../../../hooks/useAuth';


const Purchase = () => {
    const { _id } = useParams();
    // console.log(_id)
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://desolate-scrubland-90880.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    useEffect(() => {
        fetch('https://desolate-scrubland-90880.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, []);

    useEffect(() => {
        const productDetail = products.find(pd => (pd?._id) === _id)
        const productsDetail = products.find(pd => (pd?.id) === _id)
        setSingleProduct(productsDetail);

        const pdDetail = product.find(pd => (pd?.id) === _id)
        setSingleProduct(pdDetail);

    }, [products, _id, product]);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        data.pdname = singleProduct?.name;
        data.pdimg = singleProduct?.img;
        data.pdprice = singleProduct?.description;
        data.pdprice = singleProduct?.price;
        data.status = "pending";
        axios.post('https://desolate-scrubland-90880.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('your order taken successfully');
                    reset();
                }
            })
    };

    return (
        <div className='container'>
            <div className="row g-0  ms-4 mt-4 ">
                <div className="col-md-5 mt-4">
                    <img className='img-fluid rounded' src={singleProduct?.img} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{singleProduct?.name}</h5>
                        <p className="card-text">{singleProduct?.description}</p>
                        <h5 className='text-danger'><span className='fw-bold fs-3'>BDT  </span>
                            {singleProduct?.price}</h5>
                        <Link to='/home' style={{ backgroundColor: "#5d4037", padding: "8px 35px", borderRadius: "8px", color: "white", textDecoration: "none", marginTop: "20px" }}>Back</Link>
                    </div>
                </div>

                <div className="col-md-6 order m-4 p-5 rounded order-form" >
                    <h4 className='fw-bold mt-3 h'>Want to Purchase? Place Your Order</h4>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} defaultValue={user?.displayName} />
                            <input {...register("address", { required: true })} placeholder='Your Address' />
                            <input type='number' {...register("phone_number")} placeholder='Contact Number' />


                            <input className='submit' type="submit" value='Place Order' />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;