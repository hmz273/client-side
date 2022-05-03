import React from 'react'
import { Button, Link } from '@mui/material';

export default function Home() {
    return ( 
    <div>
        <Button variant="outlined"><Link href="/register">Register</Link></Button>
        <Button variant="outlined"><Link href="/login">Login</Link></Button>
        <Button variant="outlined"><Link href="/dashboard">dashboard</Link></Button>
        <Button variant="outlined"><Link href="/commande">commande</Link></Button>
        <Button variant="outlined"><Link href="/cards">cards</Link></Button>
    </div> );
}

