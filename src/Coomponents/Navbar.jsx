import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from '@mui/material';


function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
            {/* <img src="" alt="My Restaurant Logo" height="155" />  */}
            <Typography variant='outlined' color='black'>D BUNCH </Typography>
            <Button variant='contained' color='error'> jshdhshu</Button>
            </div>
            <div className="navbar-links">
                {/* <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                */}

            </div>
            
        </nav>
        
    );
}

export default Navbar;

