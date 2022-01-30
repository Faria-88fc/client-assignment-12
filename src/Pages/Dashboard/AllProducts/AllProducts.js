import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import AllProduct from '../AllProduct/AllProduct'


const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://desolate-scrubland-90880.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);


    return (
        <div className='container'>
            <h3 className=' pt-5 m-4 fw-bold' style={{ color: '#EA548C' }}>Our All Products</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: "40px", marginBottom: '60px' }}>

                        {
                            products.map(pd => <AllProduct key={pd._id} pd={pd}></AllProduct>)
                        }

                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default AllProducts;