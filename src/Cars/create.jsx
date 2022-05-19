/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
// import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Button, Container, TextField, Box, Grid, Input, Select, InputLabel, MenuItem } from '@mui/material'
import axios from 'axios';


// const Input = styled('input')({
//   display: 'none',
// });


export default function Create() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [images, setImages] = useState('');
    

  const handleSubmit = async() => {
    // store the states in the form data
    const Car = new FormData();
    Car.append("title", title)
    Car.append("price", price)
    Car.append("desc", desc)
    Car.append("images", images)
    try {
      // make axios post request 
      const response = await axios({
        method: "post",
        url: "Http://localhost:4000/api/cars/new",
        data: Car,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.images);
    } catch(error) {
      console.log(error)
    }
  }


    return (
        <Container multi>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: 4,
                    padding: 3,
                    height: '75vh',
                    width: '60vh'
                }}
            >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                name="title"
                label="Title"
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="price"
                label="Price"
                fullWidth
                onChange={(e) => setPrice(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="desc"
                label="Desc"
                fullWidth
                onChange={(e) => setDesc(e.target.value)}
                variant="standard"
              />
            </Grid>
            {/* <Grid container spacing={2}> */}
            <Grid item xs={12}>
            <label htmlFor="icon-button-file">
              <Input 
                accept="image/*"
                id="icon-button-file"
                type="file"
                required
                name="images"
                label="Images"
                fullWidth
                onChange={(e) => setImages(e.target.value)}
                variant="standard"
                style={{ display: 'none' }} />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
                <Grid>{images.title}</Grid>
            </label>
            </Grid>
            {/* </Grid> */}
          </Grid>
          <Button onClick={handleSubmit} type='submit'>Add</Button>
          </Box>
        </Container>
      );
}
