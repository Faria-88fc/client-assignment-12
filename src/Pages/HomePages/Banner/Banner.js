import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div>
                <img src="../../../../images/jhamdani.jpg" alt=""
                    style={{ height: '95vh', width: '100%', maxHeight: '500px' }}
                />
            </div>
            
            <div className='container ms-5 mb-5 d-flex flex-wrap'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_81X1l61w03TLs4eKtRoIavIL9QKWUPbYPA&usqp=CAU" alt=""
                    style={{ marginTop: '-85px', width: '290px', paddingBottom: '50px', marginLeft: '60px' }} />

                <div className='w-50 m-5 ps-5'>
                    <p style={{ color: '#EA548C', fontWeight: 'bold',fontSize:'24px' }}>Jhamdani Creation</p>
                    <small>Elegance never goes our of style!</small>
                    <small>Jhamdani sarees  are made of high quality cotton muslin, which is very thin and soft, making the saree very light and airy.Jhamdani creation makes the best effort to give you the original taste of jhamdani</small>
                    <button style={{border:'none',  backgroundColor:'#EA548C',padding:'10px 30px', borderRadius:'30px', margin:'20px 0'}}><Link to='/allproducts' style={{textDecoration:"none", color:'white' ,fontSize:'20px'}} >Explore More</Link></button>
                </div>
            </div>
        </div>

    );
};

export default Banner;