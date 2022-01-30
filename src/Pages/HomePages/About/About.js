import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='container mx-auto m-5 p-3'>
            <h1 className='text-center m-4  fw-bold' style={{ color: '#EA548C' }}>WHY CHOOSE US</h1> <hr />
            <div className='d-flex  justify-content-between '>
                <div className='w-25  me-5 '>
                    <h3 className='mt-5'>Original</h3>
                    <p>thin and soft, making the saree very light and airy.Jhamdani creation makes the best effort to give you the original taste of jhamdani</p>
                    <h3 className='mt-5'>High Quality</h3>
                    <p>thin and soft, making the saree very light and airy.Jhamdani creation makes the best effort to give you the original taste of jhamdani</p>
                    <h3 className='mt-5'>Respect</h3>
                    <p>thin and soft, making the saree very light and airy.Jhamdani creation makes the best effort to give you the original taste of jhamdani</p>
                </div>
                <div className='w-25 mt-5 pt-5 '>
                    <img className='img-fluid' src="../../../../images/saree2.jpg" alt="" />
                </div>
                <div className='w-25 ms-5 '>
                    <h3 className='mt-5'>Experienced</h3>
                    <p>thin and soft, making the saree very light and airy.Jhamdani creation makes the best effort to give you the original taste of jhamdani</p>
                    <h3 className='mt-5'>Innovation</h3>
                    <p>thin and soft, making the saree very light and airy.Jhamdani creation makes the best effort to give you the original taste of jhamdani</p>
                    <h3 className='mt-5'>Prioritize you</h3>
                    <p>thin and soft, making the saree very light and airy.Jhamdani creation makes the best effort to give you the original taste of jhamdani</p>
                </div>
            </div>

        </div>
    );
};

export default About;