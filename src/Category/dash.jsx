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

export default function Readcategory() {
    const [categorys, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`Http://localhost:4000/api/category`)
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, []);


    const getData = () => {
        axios.get(`Http://localhost:4000/api/category`)
            .then((response) => {
                setAPIData(response.data.data);
            })
    }

    const onDelete = (_id) => {
        axios.delete(`Http://localhost:4000/api/category/${_id}`)
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
                <Link to='/category/new'>
                    <Button>Add</Button>
                </Link>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Image</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categorys.map((category) => (
                    <TableRow
                      key={categorys._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {category._id}
                      </TableCell>
                      <TableCell align="right">{category.title}</TableCell>
                      <TableCell align="right"><img src={'Http://localhost:4000/'+category.images} style={{ width: "60px", height: "60px" }} /></TableCell>
                      <TableCell align="right">
                      <Link to='/update'>
                        <TableCell> 
                            <Button>Update</Button>
                        </TableCell>
                        </Link>
                      <Button onClick={() => onDelete(category._id)}>Delete</Button>
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


