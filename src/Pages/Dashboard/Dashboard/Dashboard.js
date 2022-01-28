import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div>
            <Box sx={{ flexGrow: 1, }}>
                <AppBar  position="static"  style={{ backgroundColor: 'white', boxShadow: '0 0 0 0', paddingBottom:'100px' }}>
                    <Toolbar>

                        {
                            user.email ? <ul className='d-flex flex-sm-wrap'> <Link style={{ marginRight: '20px', textDecoration: 'none', color: "#5d4037" }} to='admin'><h5
                            >make admin</h5>
                            </Link>


                                <Link style={{ marginRight: '30px', textDecoration: 'none', color: "#5d4037" }} to='addproducts'><h5
                                >addProduct</h5>
                                </Link>


                                <Link style={{ marginRight: '30px', textDecoration: 'none', color: "#5d4037" }} to='manageproducts'><h5
                                >manageProducts</h5>
                                </Link>


                                <Link style={{ marginRight: '30px', textDecoration: 'none', color: "#5d4037" }} to='manageorders'><h5
                                >manage all orders</h5>
                                </Link>

                            </ul> :

                                <ul className='d-flex '>
                                    <Link style={{ marginRight: '30px', textDecoration: 'none', color: "#5d4037" }} to='pay'><h5
                                    >pay</h5>
                                    </Link>
                                    <Link style={{ marginRight: '30px', textDecoration: 'none', color: "#5d4037" }} to='myorder'><h5
                                    >my orders</h5>
                                    </Link>
                                    <Link style={{ marginRight: '30px', textDecoration: 'none', color: "#5d4037" }} to='review'><h5
                                    >give review</h5>
                                    </Link>

                                </ul>

                        }

                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </div>
    );
};

export default Dashboard;