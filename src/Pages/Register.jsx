import React, {useState} from 'react';

//Imported Files
import '../styles/Login.css';

//Imported Tools
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

//Imported Images
import RegisterImg from '../assets/images/register.png';
import UserIcon from '../assets/images/user.png'

const Register = () => {

    const [credetials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined
    })

    const handleChange = e => {
        e.preventDefault();

        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = e => {
        e.preventDefault();


    }

    return <section>
        <Container>
            <Row>

                <Col lg="8" className="m-auto">
                    <div className="login_container d-flex justify-content-between">
                        
                        <div className="login_img">
                            <img src={RegisterImg} />
                        </div>

                        <div className="login_form">
                            <div className="user">
                                <img src={UserIcon} />
                            </div>

                            <h2>Register</h2>
                            <Form onSubmit={handleClick}>

                                <FormGroup>
                                    <input type="text" 
                                        placeholder="Full Name" required 
                                        id="username" onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="email" 
                                        placeholder="Email" required 
                                        id="username" onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="password" 
                                        placeholder="Password" required
                                        id="password" onChange={handleChange} />
                                </FormGroup>

                                <Button className="btn secondary_btn auth_btn"
                                type="submit">Register</Button>

                            </Form>

                            <p>Already Have An Account? <Link to='/login'>Login</Link></p>

                        </div>

                    </div>
                </Col>

            </Row>
        </Container>
    </section>
};

export default Register;