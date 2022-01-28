import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import AllProduct from '../AllProduct/AllProduct'


const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))

        }, []);

        
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginTop:"50px"}}>

                        {
                            products.map(pd => <AllProduct key={pd._id} pd={pd}></AllProduct>)
                        }

                    </Grid>
                </Container>
            </Box>
        );
    };

    export default AllProducts;