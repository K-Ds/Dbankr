import React from 'react';
import "../../assets/styles/components/auth/AuthButtons.css";


export default function AuthButtons({ name }) {
    return (
        <>
            <div className="auth__button auth-button--primary">{name}</div>
            <div className="auth__button auth-button--social">
                <span className="auth__social-icon"></span>
                {name} with Google
            </div>
        </>

    )
}
