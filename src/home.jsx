import React from 'react'
import { Button, Link } from '@mui/material';
import Cards from './Cards/cards'

export default function Home() {
    return ( 
    <div>
        <Button variant="outlined"><Link href="/register">Register</Link></Button>
        <Button variant="outlined"><Link href="/login">Login</Link></Button>
        <Button variant="outlined"><Link href="/dashboard">dashboard</Link></Button>
        <Button variant="outlined"><Link href="/NavBar">nav</Link></Button>

        <Cards />
    </div> );
}

