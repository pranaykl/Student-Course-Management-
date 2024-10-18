// Register.js

import React from 'react';
import './Register.css';

export default function Register() {
    return (
        <div className="register-container">
            <h2>Login</h2>
            <form className="register-form">
                <div>
                    <label>User Name:</label>
                    <input type="text" placeholder="Enter your name" />
                </div>
                
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
