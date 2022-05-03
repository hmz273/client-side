import React, { useState } from 'react';
import { Button, Container, TextField, Box, Grid, Alert } from '@mui/material'
import axios from 'axios';

export default function Createcmd() {
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [total, setTotal] = useState('');
    const postData = () => {
        axios.post(`Http://localhost:5000/api/commande/create`, {
            title,
            address,
            phone,
            total
        }).then(() => {
          return (
          <Alert severity="success">Success!</Alert>
          )
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
              <TextField
                required
                name="address"
                label="address"
                fullWidth
                onChange={(e) => setAddress(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="phone"
                label="phone"
                fullWidth
                onChange={(e) => setPhone(e.target.value)}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="total"
                label="total"
                fullWidth
                onChange={(e) => setTotal(e.target.value)}
                variant="standard"
              />
            </Grid>
          </Grid>
          <Button onClick={postData} type='submit'>Add</Button>
          </Box>
        </Container>
      );
}
