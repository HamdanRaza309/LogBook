import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
        // console.log(location.pathname)
    }, [location]);

    const handleLogout = (() => {
        localStorage.removeItem('token');
        navigate('/login')
    })
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">logBook</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ?
                        <form className="d-flex ms-auto">
                            <Link className="btn btn-primary mx-1" to='/login' role="button">Login</Link>
                            <Link className="btn btn-primary mx-1" to='/signup' role="button">Signup</Link>
                        </form> :
                        <button className="btn btn-primary mx-1 ms-auto" onClick={handleLogout}>Logout</button>
                    }

                </div>
            </div>
        </nav>

    );
};

