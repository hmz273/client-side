/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../compoments/navbar';
import {
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
    Paper,
    TableContainer,
    Container,
    Button
  } from '@mui/material';

export default function Read() {
    const [cars, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`Http://localhost:4000/api/cars`)
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, []);


    const getData = () => {
        axios.get(`Http://localhost:4000/api/cars`)
            .then((response) => {
                setAPIData(response.data.data);
            })
    }

    const onDelete = (_id) => {
        axios.delete(`Http://localhost:4000/api/cars/${_id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <Container>
          <ResponsiveAppBar />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <Link to='/create'>
                    <Button>Add</Button>
                </Link>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Desc</TableCell>
                    <TableCell align="right">Images</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cars.map((car) => (
                    <TableRow
                      key={car._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {car._id}
                      </TableCell>
                      <TableCell align="right">{car.title}</TableCell>
                      <TableCell align="right">{car.price}</TableCell>
                      <TableCell align="right">{car.desc}</TableCell>
                      <TableCell align="right"><img src={'Http://localhost:4000/'+car.images} style={{ width: "60px", height: "60px" }} /></TableCell>
                      <TableCell align="right">
                      <Link to='/update'>
                        <TableCell> 
                            <Button>Update</Button>
                        </TableCell>
                        </Link>
                      <Button onClick={() => onDelete(car._id)}>Delete</Button>
                        {/* <editHotel /> */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          {/* </Box> */}
        </Container>
      );
}


