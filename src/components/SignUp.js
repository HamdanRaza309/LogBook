import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
        <div className="container my-3">
            <h1 className='mb-3'>Create an account use logBook</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input type="text" className="form-control" name='name' id="name" value={credentials.name} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" value={credentials.password} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='cpassword' id="cpassword" value={credentials.cpassword} onChange={onChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
