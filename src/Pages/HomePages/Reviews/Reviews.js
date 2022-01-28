import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';



const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);
    return (
        <div>
            <h1 className='text-center m-4 text-warning fw-bold'>Customer Reviews</h1>
            <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        
                        {
                            reviews.map (rw => <SingleReview key={rw._id} rw={rw}></SingleReview>)
                        }

                    </Grid>
                </Container>
            
        </div>
    );
};

export default Reviews;