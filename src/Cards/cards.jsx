import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';

export default function Cards() {

    const [cars, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`Http://localhost:4000/api/cars`)
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, []);



  return (
      <Container>
    <Grid container spacing={2}>
        {cars.map((car) => (
        <Grid item xs={6} md={3}>
            <Card>
                <><CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={'Http://localhost:4000/' + car.images}
                        alt="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {car.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                   <CardActions spacing={2}>
                        <Button color="primary">
                            {car.price}dh/j
                        </Button>
                        <Button variant="contained" size="small">
                            <Link to="/booking" color="primary">Book Now</Link>
                        </Button>
                    </CardActions></>

        </Card>
        </Grid>
            ))}
    </Grid>
    </Container>
  );
}
