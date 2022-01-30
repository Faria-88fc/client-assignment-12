import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { handleEmailPassRegistration, signInWithGoogle, error, isLoading } = useAuth();

    const navigate = useNavigate();

    const handleGoogleSignUp = () => {
        signInWithGoogle();
        navigate('/home')
    }

    const [loginData, setLoginData] = useState({});

    const onChangeHandle = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegistrationSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return;
        }
        e.preventDefault();

        handleEmailPassRegistration(loginData.email, loginData.password, loginData.name);
        navigate('/home')


    }


    return (
        <div className='d-flex flex-wrap justify-content-between container  '>
            <div className=' w-50 p-5'>
                <img className='w-100' src="../../../../images/log.jpg" alt="" />
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column   mt-5' style={{ boxShadow: "2px 2px 2px 2px", marginBottom: "80px", padding: " 0 100px ", border: "none" }}>
                {!isLoading && <form onSubmit={handleRegistrationSubmit}>
                    <h3 className='my-4 text-gray fst-italic fw-bold'>Jhamdhani Creation</h3>

                    <input onChange={onChangeHandle} className='form-control w-100 mb-4' type="name" name="name" placeholder="your name" required />
                    <input onChange={onChangeHandle} className='form-control w-100' type="email" name="email" placeholder="your email" required />
                    <div className='text-warning'>{error}</div>
                    <br />
                    <input onChange={onChangeHandle} className='form-control w-100' type="password" name="password" required placeholder='your password' />
                    <br />
                    <input onChange={onChangeHandle} className='form-control w-100' type="password" name="password2" required placeholder='retype your password' />
                    <br />
                    <button type="submit" className='form-control w-100 text-white fs-5' style={{ backgroundColor: "#5d4037" }}>SignUp</button>
                </form>}
                {isLoading && <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
                {/* {user.email && <div className="modal-dialog modal-fullscreen-sm-down">
                  Successfully  Sign Up 
                // </div>} */}

                <div className='my-3 text-gray fw-bold ps-5 fs-3 '>---- OR ----</div>
                <button onClick={handleGoogleSignUp} className='ms-4' > SignIn with Google</button>

                <br />
                <p className='m-3 rounded p-2 bg-white w-50'>Already Member? <Link to='/login'>SignIn</Link></p>

            </div>

        </div>
    );
};

export default Register;