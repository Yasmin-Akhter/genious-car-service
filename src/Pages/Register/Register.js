import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const navigateToLogin = () => {
        navigate('/login');
    }
    return (
        <div className="form-container w-50 mx-auto">
            <h3>Please Register</h3>
            <form onClick={handleSubmit}>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id="" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" placeholder='Email address' required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required />
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="confirm password" id="" required />
                <input type="submit" value='Register'></input>
            </form>

            <p>Already have an account? <Link to="/login" className='text-danger mt-3 text-decoration-none' onClick={navigateToLogin}> Please Login </Link></p>
        </div>
    );
};

export default Register;
