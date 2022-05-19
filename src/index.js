import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from '../src/home';
import Create from './Cars/create';
import Update from './Cars/update';
import Read from './Cars/dash';
import Createcategory from './Category/create';
import Readcategory from './Category/dash';
import Cards from './Cards/cards';
import Booking from './Cards/booking';
import Login from './Auth/login';
import Register from './Auth/register';
import NavBar from './Header/NavBar';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Read />} />
        <Route path="Create" element={<Create />} />
        <Route path="Update" element={<Update />} />
        <Route path="category/new" element={<Createcategory />} />
        <Route path="category" element={<Readcategory />} />
        <Route path="cards" element={<Cards />} />
        <Route path="booking" element={<Booking />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="NavBar" element={<NavBar />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
