import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const{ handleEmailPassRegistration, handleGoogleLogin,handleEmail,handlePassword,error} = useAuth();
    return (
        <div className='d-flex flex-wrap justify-content-between container  '>
        <div className=' w-50 p-5'>
            <img className='w-100' src="../../../../images/log.jpg" alt="" />
        </div>
        <div className='d-flex justify-content-center align-items-center flex-column   mt-5' style={{boxShadow:"2px 2px 2px 2px", marginBottom:"80px", padding:" 0 100px ", border:"none"}}>
            <form onClick={handleEmailPassRegistration}>
                <h3 className='my-4 text-gray fst-italic fw-bold'>Jhamdhani Creation</h3>
                <input onBlur={handleEmail} type="email" name="" className='form-control w-100' placeholder="your email" required id="" />
                <div className='text-warning'>{error}</div>
                <br />
                <input onBlur={handlePassword} type="password" name="" id="" className='form-control w-100' required placeholder='password' />
                <br />
                <input type="button" className='form-control w-100 text-white fs-5' style={{backgroundColor:"#5d4037"}} value="Sign Up" />
            </form>


            <div className='my-3 text-gray fw-bold ps-5 fs-3 '>---- OR ----</div>
            <button onClick={handleGoogleLogin} className='ms-4' > SignIn with Google</button>

            <br />
            <p className='m-3 rounded p-2 bg-white w-50'>Already Member? <Link to ='/login'>SignIn</Link></p>

        </div>

    </div>
    );
};

export default Register;