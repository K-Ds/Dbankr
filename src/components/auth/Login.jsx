import React from 'react';
import '../../assets/styles/components/auth/Auth.css';
import InputGroup from '../common/InputGroup';
import PasswordInputGroup from './../common/PasswordInputGroup';
import CheckBoxInputGroup from './../common/CheckBoxInputGroup';
import AuthButtons from './AuthButtons';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="auth-container">
      <header className="auth__header">
        <h2 className="auth__title">Welcome Back</h2>
        <span className="text--light">Welcome back!Please enter your details</span>
      </header>
      <div className="auth__content">
        <InputGroup label="Email" placeholder="Enter your email address" id="email-filed" />
        <PasswordInputGroup label="Password" placeholder="Enter your password" id="password-field" />

        <div className="auth__options">
          <CheckBoxInputGroup label="Remember me in 30 days" id="remberme-checkbox" />
          <a href="" className="auth__forgot-password">
            Forgot password
          </a>
        </div>
      </div>
      <div className="auth__footer">
        <AuthButtons name="Sign in" />
        <div className="auth__change-link">
          <span className="text--light">Don't have an account? </span>
          <Link to="/signup">Sign up for free</Link>
        </div>
      </div>
    </div>
  );
}
