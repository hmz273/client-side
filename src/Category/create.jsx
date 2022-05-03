import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Button, Container, TextField, Box, Grid, Input } from '@mui/material'
import axios from 'axios';


// const Input = styled('input')({
//   display: 'none',
// });


export default function Createcategory() {
    const [title, setTitle] = useState('');
    const [images, setImages] = useState('');



    const postData = () => {
        axios.post(`Http://localhost:4000/api/category/new`, {
            title,
            images
        }).then(() => {
            console.log("done");
        })
    }


    return (
        <Container>
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
            </label>
            </Grid>
          </Grid>
          <Button onClick={postData} type='submit'>Add</Button>
          </Box>
        </Container>
      );
}
