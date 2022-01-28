import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, MenuItem } from '@mui/material';

import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static" style={{ backgroundColor: '#5d4037', padding: '10px', boxShadow: '0 0 0 0' }}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Jhamdani Creation</Typography>
                    <MenuItem></MenuItem>
                    <Link style={{ marginRight: '30px', textDecoration: 'none', color: "white" }} to='/home'><h5
                    >Home</h5>
                    </Link>
                    <Link style ={{marginRight:'30px',textDecoration:'none',color:"white"}}  to= '/dashboard'><h5
                    >Dashboard</h5>
                   </Link>
 
                    {user.email ?
                        <Button onClick={logout} color="inherit">LogOut</Button> :
                        <Link style=
                            {{ textDecoration: "none", color: "white" }} to='/login'> SignIn</Link>
                    }


                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;