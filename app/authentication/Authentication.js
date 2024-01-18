import React from 'react'
import "./Authentication.css";
import Login from './Login';

const Authentication = () => {
    return (
        <div className="authentication">
            <div className="auth__left">
                <img src="http://i.imgur.com/P3Vm1Kq.png" alt=""></img>
            </div>
            <div className="auth__right">
                <Login/>
                <div className="auth__more">
                    <spna>Don't have an account?<button>Sign Up</button> </spna>
                </div>
            </div>

        </div>
    )
}

export default Authentication;
