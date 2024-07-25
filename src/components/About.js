import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            {/* Combined Header and Welcome Section */}
            <section className="text-center d-flex flex-column justify-content-center align-items-center" style={{
                background: 'linear-gradient(45deg, rgb(255, 151, 112), #0a2463)',
                color: 'white',
                height: '80vh'
            }}>
                <div className="container">
                    <h1 style={{ color: 'rgb(255, 151, 112)', marginBottom: '1rem', fontWeight: 'bold' }}>Welcome to LogBook</h1>
                    <h2 className="text-dark" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Elevate Your Note-Taking Experience</h2>
                    <p className="text-light" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                        Discover the ultimate solution for capturing, organizing, and accessing your notes with unparalleled ease and security.
                    </p>
                    <p className="text-light" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                        Seamlessly store your thoughts, ideas, and important information in the cloud, accessible anytime, anywhere.
                    </p>
                    <Link to='/' className="btn btn-primary" style={{ margin: '10px 0px' }}>
                        Home
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5">
                <div className="container">
                    <h1 className='text-center mb-4' style={{ color: 'rgb(255, 151, 112)', marginBottom: '1rem', fontWeight: 'bold' }}>Features</h1>
                    <div className="row">
                        <div className="col-md-4 text-center mb-4">
                            <div className="bg-white p-4 rounded shadow">
                                <i className="fas fa-cloud fa-3x mb-3" style={{ color: 'rgb(255, 151, 112)' }}></i>
                                <h3 className='text-info' style={{ fontWeight: 'bold' }}>Cloud Storage</h3>
                                <p>Store all your notes securely in the cloud and access them from any device.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mb-4">
                            <div className="bg-white p-4 rounded shadow">
                                <i className="fas fa-lock fa-3x mb-3" style={{ color: 'rgb(255, 151, 112)' }}></i>
                                <h3 className='text-info' style={{ fontWeight: 'bold' }}>Secure</h3>
                                <p>Keep your notes safe with top-notch security features and encryption.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mb-4">
                            <div className="bg-white p-4 rounded shadow">
                                <i className="fas fa-sync fa-3x mb-3" style={{ color: 'rgb(255, 151, 112)' }}></i>
                                <h3 className='text-info' style={{ fontWeight: 'bold' }}>Sync Across Devices</h3>
                                <p>Sync your notes across all your devices effortlessly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Will Find Here Section */}
            <section className="py-5">
                <div className="container">
                    <h1 className='text-center mb-4' style={{ color: 'rgb(255, 151, 112)', marginBottom: '1rem', fontWeight: 'bold' }}>What You Will Find Here</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 text-center mb-4">
                            <div className="bg-white p-4 rounded shadow">
                                <i className="fas fa-star fa-3x mb-3" style={{ color: 'rgb(255, 151, 112)' }}></i>
                                <h3 className='text-info' style={{ fontWeight: 'bold' }}>Intuitive Interface</h3>
                                <p>Enjoy a user-friendly and visually appealing interface designed for efficiency and ease of use.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center mb-4">
                            <div className="bg-white p-4 rounded shadow">
                                <i className="fas fa-calendar-alt fa-3x mb-3" style={{ color: 'rgb(255, 151, 112)' }}></i>
                                <h3 className='text-info' style={{ fontWeight: 'bold' }}>Organizational Tools</h3>
                                <p>Utilize advanced tools to organize your notes, set reminders, and manage tasks effortlessly.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center mb-4">
                            <div className="bg-white p-4 rounded shadow">
                                <i className="fas fa-comments fa-3x mb-3" style={{ color: 'rgb(255, 151, 112)' }}></i>
                                <h3 className='text-info' style={{ fontWeight: 'bold' }}>Collaboration Features</h3>
                                <p>You can collaborate with others by sharing notes and working on projects together in real-time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <h1 className='text-center mb-4' style={{ color: 'rgb(255, 151, 112)', marginBottom: '1rem', fontWeight: 'bold' }}>Our Team</h1>
                    <div className="row">
                        {/* Team Member 1 */}
                        <div className="col-md-4 text-center mb-4">
                            <div className="bg-white p-4 rounded shadow">
                                <img src="https://via.placeholder.com/150" alt="Team Member 1" className="img-fluid rounded-circle mb-3" />
                                <h3 className='text-info' style={{ fontWeight: 'bold' }}>Akkar Bakkar</h3>
                                <p style={{ color: 'rgb(255, 151, 112)' }}>CEO & Founder</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula erat vitae erat euismod.</p>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="col-md-4 text-center mb-4">
                            <div className="bg-white p-4 rounded shadow">
                                <img src="https://via.placeholder.com/150" alt="Team Member 2" className="img-fluid rounded-circle mb-3" />
                                <h3 className='text-info' style={{ fontWeight: 'bold' }}>Bambay Boo</h3>
                                <p style={{ color: 'rgb(255, 151, 112)' }}>CTO</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula erat vitae erat euismod.</p>
                            </div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="col-md-4 text-center mb-4">
                            <div className="bg-white p-4 rounded shadow">
                                <img src="https://via.placeholder.com/150" alt="Team Member 3" className="img-fluid rounded-circle mb-3" />
                                <h3 className='text-info' style={{ fontWeight: 'bold' }}>Hassi Nabby</h3>
                                <p style={{ color: 'rgb(255, 151, 112)' }}>Lead Designer</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula erat vitae erat euismod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-dark text-white text-center py-5">
                <div className="container">
                    {/* Contact Us Content */}
                    <h1 className='text-center mb-4' style={{ color: 'rgb(255, 151, 112)', marginBottom: '1rem', fontWeight: 'bold' }}>Contact Us</h1>
                    <p>We would love to hear from you! Reach out to us through any of the following ways:</p>
                    <div className="row justify-content-center">
                        <div className="col-6 col-md-2 mb-4">
                            <Link to="mailto:support@cloudnotes.com" className="text-white">
                                <i className="fas fa-envelope fa-2x mb-2" style={{ color: '#ea4335' }}></i>
                                {/* <p className='text-info'>hamdanraza309@gmail.com</p> */}
                            </Link>
                        </div>
                        <div className="col-6 col-md-2 mb-4">
                            <Link to="https://wa.me/+1234567890" target="_blank" rel="noopener noreferrer" className="text-white">
                                <i className="fab fa-whatsapp fa-2x mb-2" style={{ color: '#25D366' }}></i>
                                {/* <p className='text-info'>+923463172289</p> */}
                            </Link>
                        </div>
                        <div className="col-6 col-md-2 mb-4">
                            <Link to="https://www.google.com/maps?q=123+Cloud+St,+Note+City,+NT+45678" target="_blank" rel="noopener noreferrer" className="text-white">
                                <i className="fas fa-map-marker-alt fa-2x mb-2" style={{ color: '#4285F4' }}></i>
                                {/* <p className='text-info'>Maini, Swabi, Kpk</p> */}
                            </Link>
                        </div>
                        <div className="col-6 col-md-2 mb-4">
                            <Link to="https://github.com/HamdanRaza309" target="_blank" rel="noopener noreferrer" className="text-white">
                                <i className="fab fa-github fa-2x mb-2" style={{ color: 'white' }}></i>
                                {/* <p className='text-info'>GitHub</p> */}
                            </Link>
                        </div>
                        <div className="col-6 col-md-2 mb-4">
                            <Link to="https://www.linkedin.com/in/hamdan-raza-8790a02b7/" target="_blank" rel="noopener noreferrer" className="text-white">
                                <i className="fab fa-linkedin fa-2x mb-2" style={{ color: '#0077B5' }}></i>
                                {/* <p className='text-info'>LinkedIn</p> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer Section */}
            <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    <p>&copy; 2024 LogBook. All rights reserved.</p>
                    <p className="text-white" style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                        <Link to='/about' >Privacy Policy</Link> |
                        <Link to='/about' > Terms of Service</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default About;