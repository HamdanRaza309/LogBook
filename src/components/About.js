import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {
    return (
        <div className="about-us">
            <section className="hero bg-primary text-white text-center py-5">
                <Container>
                    <h1 className="display-4">Welcome to LogBook</h1>
                    <p className="lead">Your trusted partner in cloud-based note-taking solutions.</p>
                </Container>
            </section>

            <section className="mission py-5">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <h2 className="mb-4" style={{ color: '#ff9770 ', fontWeight: 'bold' }}>Our Mission</h2>
                            <p>
                                At LogBook, we are committed to providing a seamless, secure, and user-friendly platform for
                                storing and managing your notes. Our mission is to make your life easier by ensuring that your
                                important information is always at your fingertips, accessible from anywhere, at any time.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="team py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-4" style={{ color: '#ff9770 ', fontWeight: 'bold' }}>Meet Our Team</h2>
                    <Row>
                        <Col md={4}>
                            <Card className="border-0">
                                <Card.Img variant="top" src="data:image/jpeg;base64,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" alt="Jane Doe" />
                                <Card.Body className="text-center">
                                    <Card.Title>Akkar Bakkar</Card.Title>
                                    <Card.Text>Co-Founder & CEO</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="border-0">
                                <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAwgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBgcEBf/EADYQAAICAQIDBgMFCAMAAAAAAAABAgMEBREGIXESMTJBUWETIpEHUmKBwRUjM0KhsdHhFPDx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDrgAAAEoC0UZYopFGVcgJRIAA1rWOL8XDlKnCism1cnLf5Yvr5nz+Ntdmp/szDs7KS/fzXe/w/5NNA+jqGu6lqLfx8marb/hwfZj9F3/mfO225+oBUAAB9XSuINQ0yUexc7aV31WS3X5eh0DRdaxNXpbol2bY+KqXejlRlxci7EyIZGNY67YPeMl/YiuxA+Tw7rVesYm6SjfWtrYP+69j6wBlJIuVYGGaMZmmYmBBDJRDA9UPBHoiCYeCPREAecAAC0SC0QMkTIUiZAB5NVzFgaffkyf8ADi9uvkes1T7Qsr4en0Y0eXxbO1L3SA0WyyVtk7LJNzk+1J+rZUAoAAIAAAAAPXpOoW6ZnV5VP8r2lHflKPmjrGPdXk0V31PtQsipRfsccN+4BzHbp1uLN7uify7+UWFbSQyQyDFJGKS2M8jDNAUIZJDA9UPBHoiCYeCPREAecAASi8SheAGWKLopEuAOffaBc56xVVvyroXL3bf+joJzXjaMlxHe5dzrg102A+EACoAAAAAAAAGzfZ/a46xdVvyspb+jRrJsPAkZPX1Jdypnv/QK6MACCsjDIzMxSAxsqyzKvuA9UPBHoiCYeCPREAecAMCUXgY0ZIAZYlykS4A0f7Q8Xs5GLmeU4uqX5c1+pvB8LjSFM9Aud72aknW/xbrYDmoAKgAAAAAAAAbp9nmLyysyXc9q4/qaWdT4axYYeiY1cJRk5RU5SjzTbA+oACKqzFMysxTAxsq+4syrA9UPBHoiCYeCPREAecMAAjJAoWiBmiXKQLgDWuP03okH5K6O6+psp8LjWr4vD1/4JRl9GBzUAFQAAAAAAAAOk8ENvh2ndt7Tmv6nNjqHCVXwuH8Vfei5/VhX1wAQVZimZZGGQFGVZYqwPVDwR6IgmHgj0RAHnAAAvAoWiwM0S6McWZEBJiyseGVjWUWreFkXFoygDkOo4Vun5tuLctpQfL8S8meY37j3TlkYFebCP7zHe0n6wf8As0EAACoAAAAAL00zyboUVRcrLGoxS9zr+JRHGxaaI91cFHl5mq8CaSq6JandH95Ndmrfyj5v8zbyKAEMCsjFIySMUgKlWSQwPVDwR6IgmHgj0RAHnAAAlEEgZIMyowRZliBkBCJAx5FMMiiymxbxsi4yXU5LqOJLAzbsW3ftVS2W/mvJnXjm/HDT4ht223+HDf6f+AfAABUAAAM+BjSzM6jFj33TUf6mA+twpDt8R4K9Jyf0iwOnUUwophTWuzCEVGKXoi4BFCrLPkUkwKTZibLyZQCCGSQwPVDwR6IgmHgj0RAHnAAAAASmZYsxFosDOmWMaZdAScx4uxsijXL55K5XPt1yXdKPdsb1qmr4+Hm4eFOW1l8+f4I+r/PkX13SatXw3j2/LZD5qpfdkBykGfNxLsHJnj5EOzZF8/TqjAVAAdeXuAPucGOMNfpsmpdlRku1tyi2tluX0DhfK1Rxuv7WPid7k180ui/U3/E0zCwcR4tFMYVNbS3737tgekHzNE1WjUI31VTc5Y1jg2++UfJn0myKNmOTLMxSYFZMqSQAIZJDA9UPBHoiCYeCPREAecAAADDk5WPiw7eTbCuP4mBmJT25mrahxhRXvDApdsvKyzlE1vN1nUcxv4+VNRf8sPlQHRcnVsDDjvk5dUH6drd/Q+BqPG1cIyr06lzn3K23kl0XmaU+b3ff6gDNkZN+RkyybrJTvk03JvzXcdS0LNWo6Xj5XLtShtL2a5P+xyc3T7PMzeGVgyl4WrYfr/33A2DXNFxtZo7N3yWx/h2x74+3Q5zq2k5ek3/DyofI38lq8MzrG+5r/Gep0YWn/wDHnVC62/lCE+aivvMo57jY92VdGnHrlZZLkoxXf/g3vh/hCrFccjUtrb1zVX8kH7+rPn/Z9nVwybcGyutWWJyrtS+aW3fFs3xAIpJJRWyPg8Zan+z9InXW9r8j93D2Xmz7xy7i7U/2lq9nYe9NHyV++3eyDw6RqF2lZ0Mqjn2eU4+Uo+aOoYWbj5+NC/GsUoy8t+a9mcjMuPk5GLP4mNbOqW++8JbAdckzG2aHh8X6hTtHJjDJivVdl/U+7h8Vafk8rXLHm/KfNfUD7oKVW13RUqZxnF+cXuXAEMkhgeqHgj0RBMPBHoiAPOTtz/LcgAajxLr2di5DxseUK4/eUfmNVuttvn8S6ydk/WT3AAoACgAAgfY4QtnVxDiqD5T3jL3WwBFdMXP6o5dxLk25OuZbtlv8OfYivRIAo8mn32Y2fj3Uy7M4WJpnYYveKfqtyQQfP4gvsxtDzb6ntZCpuL9PI5Iu4kAAAVAABWXHyLsb58e2dcl92Wxs3DvEGflXqnIddi7u048wCDcZeRVkgD0w8EeiIAA//9k=" alt="John Smith" />
                                <Card.Body className="text-center">
                                    <Card.Title>Bambay Boo</Card.Title>
                                    <Card.Text>Lead Developer</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="border-0">
                                <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqwMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABAUGAQIDB//EADcQAAICAQIEAgcHAwUBAAAAAAABAgMEESEFEjFBUXETIjJSYZHBBhRCgaGx4TNz0TRjcpKiI//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7OAAAAAAAAAVP2i4i8LDddM0r7fVWj3iu7AcU49j4LdVS9NfHZxT2T+LK7B+0K5bsjPscrPZqx646LTu/oZsAS+JcQu4jkelt9WKWkIJ7RR5Y2XkYlinjWzg/g9n5o8QBseCccjnNUZCVeTptp7M/LwZdHzWEpVyU4NxnF6xa7M3XDOL42fCEIWKN+i5q3s2/h4gWAAAAAAAAAAAAAAAAAAArOO8UXDcZej0d9m0E+3izE2WTtslZbJynJ6uT6snceyvvXFLp82sYP0cfgl/OpX+QAaltgcFsujGzJk64v8KXrP8AwWlfCMGHWhT/AOUmwMrqOxr1w/DWyxav+moWBhp6/dadf7aAzGLi2Xqc0mq64uUpfQjxbT1Taa3TXY2OTXFYltdcVFejaSS+BjgNj9nOLPNrePkSTyK1qn78fHzLo+ecPyXiZtF34Yy9byezPoYAAAAAAAAAAAAAAAAHzWcnKycpdW22WfAsON97tmtYVdn3ZX5Nfosm6t/hm1+ppOBV8nDoPvNuT/b6AWAAAAAB57mOzaHjZdtTWyl6vl2NiVfG8F5VXpqlpZWunvRAzct4s+j48nPGpnLrKuLfyPm7TltHq9kfS4R5IRivwpIDkAAAAAAAAAAAAAHRag6z9iXkBhuPw5OLXyjtGbU1+f8AOpf8NXLw/GX+3F/oVX2lq/o3JdnB/uvqXGD/AKLH/tR/ZAewAAAAAcT9mXkcnEvZfkBkcCtW8Rpg+npFr5J6n0JaNJrozE/Z6nnzJ26bVx283/Gps6P6MPIDuAAAAAAAAAAAAABrVaAAUfE8T73jyo15GpJqT7aEiEVCMYR9mKSXkS8ihzlzQ79SKgAAAAAAGAwI2BhxxI2Qg03Obev0LuC5YpeCIuPQ9VZNer1SJfmAAAAAAAAAAAAAAAAA67FdZHlslHwZYkbLr2U122YEUAAAAAOUuaSS8TgkYlbb530XQCWlotF2AAAAAAAAAAAAAAAAAAA6XSjGqbk0lppqzplZNeLTK217LovF+Bmrs63NzapWPSCmuWC6Lf8AcC0jPllyTe/4X7x6HSytWQ5ZdOz8CM3dj7a6x8WBMBC+9z91HSeRZNaOWi+AEq/IVey3l+xYcOlzYkN03vr8ygPCvKuw8qdlMur9aPaSA14I2BmVZtKsr2a2lF9UySAAAAAAAAAAAAHhlZmPiR1vsUXptHq3+RTZXH5y9XFgor35bv5AaB7LV7LxId/FMOn2rot+ENzL35N2RLW62Uvg3t8jxAmcSzZ5t/M9q47Qj4Lx8yNVJQthJ9IyTOpwBparI2QUoPVPo0dtE+qTM7RfZRLmrlou67Mt8POryNIvSNnh2fkB6zxoSeq1j5Hk8Pf2/wDySyNl5leMtG+afaK+oHSWMoRcp2pRXV6FPa4zsnKK9VvbU75GTZky1sey6RXRHiB74WVPDyI216vtKPvI0+PxPDv0UblGXuz2ZkQBuu2vYGLx8q/HetN0ofDXb5Fri8fmtFlVc696vZ/IC/BHxczHy1/8LE33i9mvyJAAAAG0k23ol1ZQ8R42+Z14W3jY/ovqdvtFlyXLiwezXNZ9EUIHacpTk5Tk5Sfds6gAAAAAAA5TaeqejRwcgXFWang+mkvWjs18SonN2Sc5bt9WFNqtw12cuZnUAAAAAAAADlNxfNHaS6NdS3wOOWVtQzE7Ie/+Jf5KcAbiuyNsFZXJShJaxa7nYyvB86WJkRhOT9DN6SXh8TVeYGV469eKXa9kl+hXgAAAAAAAAAAAAAAAAAAAAAAAAAGbfHblj1SfVwTfyAA//9k=" alt="Emily Johnson" />
                                <Card.Body className="text-center">
                                    <Card.Title>Hassy Nabby</Card.Title>
                                    <Card.Text>Marketing Specialist</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="history py-5">
                <Container>
                    <h2 className="text-center mb-4" style={{ color: '#ff9770 ', fontWeight: 'bold' }}>Our History</h2>
                    <Row>
                        <Col md={12}>
                            <p>
                                Founded in 2024, LogBook started with a vision to revolutionize the way people manage their notes
                                and information. Our team of passionate professionals has been dedicated to building a platform
                                that not only meets but exceeds your expectations. Over the years, we have grown and adapted,
                                always keeping user needs at the forefront of our development.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="contact py-5 bg-light text-center">
                <Container>
                    <h2 className="mb-4" style={{ color: '#ff9770 ', fontWeight: 'bold' }}>Get In Touch</h2>
                    <p>
                        Have questions or feedback? We'd love to hear from you! Contact us at
                        <a href="mailto:support@logbook.com" className="text-decoration-none text-primary"> support@logbook.com</a> or follow us on our social media channels.
                    </p>
                </Container>
            </section>
        </div>
    );
};


