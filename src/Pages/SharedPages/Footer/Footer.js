import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Jhamdani Creation</h3>
            <hr />
            <div className='footer-infos '>
                <div>
                    <h5>About Us</h5>
                    <p className='footer-info'>about</p>
                    <p className='footer-info'>why we are unique</p>
                    <p className='footer-info'>payment</p>
                </div>
                <div>
                    <h5>Community</h5>
                    <p className='footer-info'>blogs</p>
                    <p className='footer-info'>FAQs</p>
                </div>
                <div>
                    <h5>More</h5>
                    <p className='footer-info'>terms</p>
                    <p className='footer-info'>policy</p>
                    <p className='footer-info'>contact</p>
                </div>
                <p className="footerp">all rights reserve©2021</p>
            </div>
            
            
        </div>
    );
};

export default Footer;