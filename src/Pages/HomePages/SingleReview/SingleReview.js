import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const singleReview = (props) => {
    const { name, comment, rating } = props.rw;

    return (
        <Grid itrm xs={4} sm={4} md={4}>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {comment}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        {rating}
                    </Typography>
                </CardContent>
            </Card>


        </Grid>
    );
};

export default singleReview;