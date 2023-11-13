import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png'

import './NewsLetter.css'

const NewsLetter = () => {
    return <section className="newsletter">
        <Container>
            <Row>

                <Col lg="6">
                    <div className="newsletter_content">

                        <h2>Subscribe now to get useful travelling information</h2>

                        <div className="newsletter_input">
                            <input type="email" placeholder="Enter Your Email" />

                            <button className="btn newsletter_btn">
                                Subscribe
                            </button>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur. sunt in provident<br/> 
                        adipiscing elit. Nullam ac ultricies erat.</p>

                    </div>
                </Col>

                <Col lg="6">

                    <div className="newsletter_img">
                        <img src={maleTourist} />
                    </div>
                    
                </Col>

            </Row>
        </Container>
    </section>
};

export default NewsLetter