/* eslint-disable no-undef */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

export default function ReadCommand() {
    const [commandes, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`Http://localhost:5000/api/commande`)
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, []);


    const getData = () => {
        axios.get(`Http://localhost:5000/api/commande`)
            .then((response) => {
                setAPIData(response.data.data);
            })
    }

    const onDelete = (_id) => {
        axios.delete(`Http://localhost:5000/api/commande/${_id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <Container>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <Link to='/createcmd'>
                    <Button>Add</Button>
                </Link>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {commandes.map((commande) => (
                    <TableRow
                      key={commande._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {commande._id}
                      </TableCell>
                      <TableCell align="right">{commande.title}</TableCell>
                      <TableCell align="right">{commande.address}</TableCell>
                      <TableCell align="right">{commande.phone}</TableCell>
                      <TableCell align="right">{commande.total}</TableCell>
                      <TableCell align="right">{commande.status}</TableCell>
                      <TableCell align="right">
                      <Link to='/update'>
                        <TableCell> 
                            <Button>Update</Button>
                        </TableCell>
                        </Link>
                      <Button onClick={() => onDelete(commande._id)}>Delete</Button>
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
