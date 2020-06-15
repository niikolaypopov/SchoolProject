import React, { useState } from 'react';
import './Login.css';
import { login } from '../../../core/api/users.api';
import { Redirect, Link } from 'react-router-dom';

export function Login(props) {

    const [userData, setUserData] = useState({});
    const [isLoggedUser, setLoggedUser] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onInputChange = (event) => {
        event.persist();
        console.log(event);

        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
        setErrorMessage('');
        console.log(userData);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        login(userData).then(() => {
            console.log('LOGIN SUCCESS');
            setLoggedUser(true);
        })
        .catch((err) => setErrorMessage(err.message));
    };

    return (
        <>
        { isLoggedUser && <Redirect to="/" /> }
        <div className="login-wrapper">
        <div class="shadow-lg p-3 mb-5 rounded" style={{borderRadius: '10px'}}>
            <form className="login-form" onSubmit={onFormSubmit}>
                { errorMessage && <span className="text-danger">{errorMessage}</span> }
                <div className="login-logo">
                <img src={require('./../../assets/logo.png')} height="150px"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" className="form-control" onChange={onInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" className="form-control" onChange={onInputChange} />
                </div>
                <button className="btn btn-primary">LOGIN</button>
                <Link to="/register">Don't have an account?</Link>
            </form>
        </div>
        </div>
        </>
    )
}