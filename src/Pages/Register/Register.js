import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Register.css'
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        // createUserWithEmailAndPassword(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUser(user);
                console.log(user);
                // ...
            })
            .catch((error) => {
                console.log(error);
            });

    }
    if (user) {
        navigate("/");
    }




    const navigateToLogin = () => {
        navigate('/login');

    }


    return (
        <div className="form-container w-50 mx-auto">
            <h3>Please Register</h3>
            <form onSubmit={handleRegister}>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Email address' required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="confirm password" required />
                <input type="submit" value='Register'></input>
            </form>

            <p>Already have an account? <Link to="/login" className='text-danger mt-3 text-decoration-none' onClick={navigateToLogin}> Please Login </Link></p>
        </div>
    );
};

export default Register;
