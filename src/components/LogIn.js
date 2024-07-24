import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const LogIn = (props) => {

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json)
        setCredentials({ email: "", password: "" })

        if (json.success) {
            // Save auth-token in localStorage and redirect
            localStorage.setItem('token', json.authToken)
            props.showAlert('Successfully Logged In', 'success')
            navigate('/')
        } else {
            props.showAlert('Invalid Credentials', 'danger')
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="custom-container d-flex justify-content-center align-items-center min-vh-100">
            {/* Login Container */}
            <div className="row border rounded-5 p-3 bg-white shadow box-area">
                {/* Left Box */}
                <div
                    className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                    style={{ background: '#103cbe' }}
                >
                    <div className="featured-image mb-3">
                        <img src="/login.png" className="img-fluid" style={{ width: '250px' }} alt="featured" />
                    </div>
                    <p className="text-white fs-2" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 600 }}>
                        Be Verified
                    </p>
                    <small
                        className="text-white text-wrap text-center"
                        style={{ width: '17rem', fontFamily: "'Courier New', Courier, monospace" }}
                    >
                        Log in to proceed to logBook
                    </small>
                </div>

                {/* Right Box */}
                <div className="col-md-6 right-box">
                    <div className="row align-items-center">
                        <div className="header-text mb-4">
                            <h2>Hello, Again</h2>
                            <p>We are happy to have you back.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control form-control-lg bg-light fs-6" name='email'
                                    id="email" placeholder="Email address" value={credentials.email} onChange={onChange}
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="input-group mb-1">
                                <input type="password" className="form-control form-control-lg bg-light fs-6" name='password'
                                    id="password" placeholder="Password" value={credentials.password} onChange={onChange} />
                            </div>
                            <div className="input-group mb-3">
                                <button type="submit" className="btn btn-lg btn-primary w-100 fs-6">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};