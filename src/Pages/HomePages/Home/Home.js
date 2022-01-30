import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Product from '../Product/Product';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Reviews from '../Reviews/Reviews';



const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://desolate-scrubland-90880.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    // console.log(products)

    return (
        <div>
            <Banner></Banner>


            <h2 className='text-center pb-4 m-4 fw-bold' style={{ color: '#EA548C' }}>LATEST ARRIVAL</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        {
                            products.map(pd => <Product key={pd._id} pd={pd}></Product>)
                        }
                    </Grid>
                </Container>
            </Box>
            <About></About>
            <Reviews></Reviews>
        </div>

    );
};

export default Home;