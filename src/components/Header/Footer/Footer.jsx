import React from 'react';

import './Footer.css';
import logo from '../../../assets/images/logo.png';

import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';

const quick_links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
];

const quick_links2 = [
    {
        path: '/gallery',
        display: 'Gallery'
    },
    {
        path: '/login',
        display: 'Login'
    },
    {
        path: '/register',
        display: 'Regiter'
    },
]



const Footer = () => {

    const year = new Date().getFullYear()

    return <footer className="footer">
        <Container>
            <Row>

                <Col lg="3">
                    <div className="logo">

                        <img src={logo} alt=""/>
                        <p>lorem ipsum dolor sit amet consectur adapscining elit.
                            Commodi, enim.
                        </p>

                        <div className="social_links d-flex align-items-center gap-4">
                            
                            <span>
                                <Link to="#"><i class="ri-youtube-fill"></i></Link>
                            </span>

                            <span>
                                <Link to="#"><i class="ri-facebook-circle-line"></i></Link>
                            </span>

                            <span>
                                <Link to="#"><i class="ri-instagram-fill"></i></Link>
                            </span>

                        </div>

                    </div>
                </Col>

                <Col lg="3">

                    <h5 className="footer_link-title">Discover</h5>

                    <ListGroup className='footer_quick-links'>

                        {
                            quick_links.map((item, index) => (
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }

                    </ListGroup>

                </Col>

                <Col lg="3">

                    <h5 className="footer_link-title">Quick Links</h5>

                    <ListGroup className='footer_quick-links'>

                        {
                            quick_links2.map((item, index) => (
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }

                    </ListGroup>  

                </Col>
                <Col lg="3">

                    <h5 className="footer_link-title">Contact</h5>

                    <ListGroup className='footer_quick-links'>

                        <ListGroupItem className="ps-0 border-0 d-flex 
                        align-items-center gap-3">

                            <h6 className="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <i class="ri-map-pin-2-line"></i>
                                </span>
                                Address:
                            </h6>

                            <p className="mb-0">Lagos, Nigeria</p>
                           
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0 d-flex 
                        align-items-center gap-3">

                            <h6 className="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <i class="ri-mail-line"></i>
                                </span>
                                Email:
                            </h6>

                            <p className="mb-0">bryanokononfua@gmail.com, <br/> oseghaleokononfua@gmail.com</p>
                           
                        </ListGroupItem>

                        <ListGroupItem className="ps-0 border-0 d-flex 
                        align-items-center gap-3">

                            <h6 className="mb-0 d-flex align-items-center gap-2">
                                <span>
                                    <i class="ri-phone-line"></i>
                                </span>
                                Phone No: 
                            </h6>

                            <p className="mb-0">+2349159599841, <br/> +2348142990847</p>
                           
                        </ListGroupItem>

                    </ListGroup>

                </Col>

                <Col lg="12" className="text-center pt-5">

                    <p className="copyright">
                        Copyright {year}, designed and develop by McBryan-dev & Mathew-Pio. All rights reserved.
                    </p>

                </Col>

            </Row>
        </Container>
       
    </footer>
};

export default Footer;