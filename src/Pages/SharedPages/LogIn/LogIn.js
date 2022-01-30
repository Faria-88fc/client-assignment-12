import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const LogIn = () => {
    const { emailPasswordSignIn, signInWithGoogle, error, isLoading } = useAuth();

    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {

                navigate('/home');
            })

    }

    const [loginData, setLoginData] = useState({});

    const onChangeHandle = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        emailPasswordSignIn(loginData.email, loginData.password);
        navigate('/home')

    }



    return (
        <div className='d-flex flex-wrap justify-content-between container  '>
            <div className=' w-50 p-5'>
                <img className='w-100' src="../../../../images/log.jpg" alt="" />
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column   mt-5' style={{ boxShadow: "2px 2px 2px 2px", marginBottom: "80px", padding: " 0 100px ", border: "none" }}>
                {!isLoading && <form onSubmit={handleLoginSubmit} >
                    <h3 className='my-4 text-gray fst-italic fw-bold'>Jhamdhani Creation</h3>
                    <input onChange={onChangeHandle} type="email" name="email" className='form-control w-100' placeholder="your email" required id="" />
                    <br />
                    <div className='text-warning'>{error}</div>
                    <br />
                    <input onChange={onChangeHandle} type="password" name="password" id="" className='form-control w-100' required placeholder='password' />
                    <br />
                    <button type="submit" className='form-control w-100 text-white fs-5' style={{ backgroundColor: "#5d4037" }}>SignIn</button>
                </form>}
                {isLoading && <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}

                <div className='my-3 text-gray fw-bold ps-5 fs-3 '>---- OR ----</div>
                <button onClick={handleGoogleLogin} className='ms-4' > SignIn with Google</button>

                <br />
                <p className='m-3 rounded p-2 bg-white w-50'>New here?<Link to='/register'>SignUp</Link></p>

            </div>

        </div>
    );

};

export default LogIn;