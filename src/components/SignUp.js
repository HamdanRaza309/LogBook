import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = (props) => {

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

    const handleSubmit = async (e) => {

        e.preventDefault()

        const { name, email, password } = credentials
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        // console.log(json)
        // setCredentials({ name: "", email: "", password: "", cpassword: "" })

        if (json.success) {
            // Save auth-token in localStorage and redirect
            localStorage.setItem('token', json.authToken)
            navigate('/')
            props.showAlert('Successfully Signed Up', 'success')
        } else {
            props.showAlert('Invalid Details', 'danger')
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">
            <div className="myCard">
                <div className="row">
                    <div className="col-md-6">
                        <div className="myLeftCtn">
                            <form onSubmit={handleSubmit} className="myForm text-center">
                                <header>Create new account</header>
                                <div className="form-group">
                                    <i className="fas fa-user"></i>
                                    <input type="text" className="myInput" name='name' id="name" placeholder="Username"
                                        value={credentials.name} onChange={onChange} minLength={5} required />
                                </div>

                                <div className="form-group">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" className="myInput" placeholder="Email" name='email' id="email"
                                        value={credentials.email} onChange={onChange} aria-describedby="emailHelp"
                                        required />
                                </div>

                                <div className="form-group">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" className="myInput" name='password' id="password"
                                        placeholder="Password" value={credentials.password} onChange={onChange}
                                        minLength={5} required />
                                </div>
                                <button type="submit" className="butt">Signup</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="myRightCtn">
                            <div className="box">
                                <header>Welcome to logBook!</header>

                                <p> Effortlessly store, access, and manage your notes anytime, anywhere.</p>
                                <Link className="butt_out" to='/about'>About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}