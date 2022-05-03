import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, TextField, Box, Grid } from '@mui/material'
import axios from 'axios';

export default function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [desc, setDesc] = useState('');


    const updateAPIData = () => {
        axios.put(`Http://localhost:5000/api/restau/${id}`, {
            title,
            city,
            desc
        }).then(() => {
            navigate('/dashboard')
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="city"
                label="city"
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="desc"
                label="desc"
                fullWidth
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                variant="standard"
              />
            </Grid>
          </Grid>
          <Button onClick={updateAPIData} type='submit'>Update</Button>
          </Box>
        </Container>
      );
}
