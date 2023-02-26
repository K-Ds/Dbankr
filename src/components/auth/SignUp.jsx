import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/auth/Auth.css';
import InputGroup from '../common/InputGroup';
import PasswordInputGroup from './../common/PasswordInputGroup';
import AuthButtons from './AuthButtons';

export default function SignUp() {
    return (
        <div className="auth-container">
            <header className="auth__header">
                <h2 className="auth__title">Create new account</h2>
                <span className="text--light">Welcome! Please enter your details</span>
            </header>
            <div className="auth__content">
                <InputGroup label="Email" placeholder="Enter your name" id="name-filed" />
                <InputGroup label="Email" placeholder="Enter your email address" id="email-filed" />
                <PasswordInputGroup label="Password" placeholder="Enter your password" id="password-field" />
            </div>
            <div className="auth__footer">
                <AuthButtons name="Register" />
                <div className="auth__change-link">
                    <span className="text--light">Already an account? </span>
                    <Link to="/">Sign in</Link>
                </div>
            </div>
        </div>
    );
}
