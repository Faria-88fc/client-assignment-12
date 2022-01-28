import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const AllProduct = (props) => {
    // console.log(props.pd)
    const { price, img, name, description, _id } = props.pd;

        const url = `/pd/:${_id}`

    return (
        
        <Grid itrm xs={4} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "30px",maxHeight:"700px" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    style={{ height: "455px" }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ color: "tomato", fontWeight: "bold", marginTop: "4px" }}> Price: BDT
                     {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link onClick=
                {url}  style={{ textDecoration: "none", margin: "auto" }}><Button size="small" style={{ backgroundColor: "#5d4037", padding: "8px 25px", borderRadius: "8px", color: "white" }}>
                    Buy Now
                </Button></Link>
            </CardActions>
        </Card>
    </Grid>
    );
};

export default AllProduct;