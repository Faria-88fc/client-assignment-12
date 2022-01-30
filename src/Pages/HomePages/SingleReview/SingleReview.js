import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from 'react-rating';

const singleReview = (props) => {
    const { name, comment, rating, email } = props.rw;

    return (
        <Grid itrm xs={4} sm={4} md={4}>
            <Card style={{ margin: '20px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {comment}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ color: 'blue' }}>
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ color: 'black' }}>
                        {email}
                    </Typography>
                    <Typography variant="body2">
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star text-danger"
                            fullSymbol="fas fa-star text-warning "
                            readonly></Rating>
                    </Typography>
                </CardContent>
            </Card>


        </Grid>
    );
};

export default singleReview;