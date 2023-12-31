import React, {useState} from 'react';

//Imported Files
import '../styles/Login.css';

//Imported Tools
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

//Imported Images
import logoImg from '../assets/images/login.png';
import UserIcon from '../assets/images/user.png'

const Login = () => {

    const [credetials, setCredentials] = useState({
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
                            <img src={logoImg} />
                        </div>

                        <div className="login_form">
                            <div className="user">
                                <img src={UserIcon} />
                            </div>

                            <h2>Login</h2>
                            <Form onSubmit={handleClick}>

                                <FormGroup>
                                    <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="password" 
                                        placeholder="Password" required
                                        id="password" onChange={handleChange} />
                                </FormGroup>

                                <Button className="btn secondary_btn auth_btn"
                                type="submit">Login</Button>

                            </Form>

                            <p>Don't Have An Account? <Link to='/register'>Register</Link></p>

                        </div>

                    </div>
                </Col>

            </Row>
        </Container>
    </section>
};

export default Login;