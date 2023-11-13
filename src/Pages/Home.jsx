import React from 'react';
import '../styles/Home.css';
import Subtitle from '../shared/Subtitle'

import {Container, Row, Col} from 'reactstrap';

import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import ExperienceImg from '../assets/images/experience.png'

import SearchBox from '../shared/SearchBox';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Header/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Header/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Header/Testimonials/Testimonial.jsx'
import NewsLetter from '../shared/NewsLetter'

const Home = () => {
    return <>

        {/* ======== hero section start ======== */}
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="hero_content">

                            <div className="hero_subtitle d-flex align-items-center">
                                <span className="subtitle"><Subtitle subtitle={'KNOW BEFORE YOU GO'} /></span>
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Travelling Opens The Door To Creating 
                                 <span className="highlight">Memories</span>
                            </h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Nullam sit amet justo a mi vestibulum feugiat. 
                             Praesent nec ligula non odio fringilla tincidunt. 
                             Nulla facilisi. Suspendisse potenti. 
                             Quisque euismod mi nec lorem feugiat, non sollicitudin 
                             dolor vulputate. Sed eget metus eu mi consequat tincidunt. 
                             Aenean euismod orci vel quam viverra, vel malesuada 
                             ligula pellentesque. Sed sed lacus bibendum, 
                             tristique tortor at, sollicitudin nunc. Integer 
                             interdum ac nulla nec finibus.
                            </p>
                        </div>
                    </Col>

                    <Col lg="2">
                        <div className="hero_img-box mt-5">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>

                    <Col lg="2">
                        <div className="hero_vid-box mt-5">
                            <video src={heroVideo} alt="" controls/>
                        </div>
                    </Col>

                    <Col lg="2">
                        <div className="hero_imgtwo-box mt-5">
                            <img src={heroImg02} alt="" />
                        </div>
                    </Col>

                    <SearchBox />

                </Row>
            </Container>
        </section>
        

        <section>
            <Container>
                <Row>

                    <Col lg="3">
                        <h5 className="services_subtitle">What We Serve</h5>
                        <h2 className='services_title'>We Offer Best Services</h2>
                    </Col>
                    
                    <ServiceList />

                </Row>
            </Container>
        </section>

        {/* ======== Featured tour section start ======== */}

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="mb-5">
                            
                            <h1 className="cards_title">Explore A Few Options</h1>
                            <h2 className="featured_tour-title">
                                Our Featured Tours
                            </h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>

        {/* ======== Featured tour section end ======== */}

        {/* ======== Experience section start ======== */}

            <section>
                <Container>
                    <Row>

                        <Col lg="6">
                            <div className="experience_content">

                                <h1 className="experience_title">
                                    Experience
                                </h1>

                                <h2>With All Our Experience <br /> We Will Serve You </h2>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        <br/> 
                                    fringilla nisl. Donec ullamcorper quam eu efficitur. In hac habitasse platea dictumst.
                                </p>

                            </div>

                            <div className="counter_wrapper d-flex align-items-center gap-5">

                                <div className="counter_box">
                                    <span>12k+</span>
                                    <h6>Successful Trips</h6>
                                </div>

                                <div className="counter_box">
                                    <span>2k+</span>
                                    <h6>Regular Client</h6>
                                </div>

                                <div className="counter_box">
                                    <span>15</span>
                                    <h6>Years Experience</h6>
                                </div>


                            </div>
                        </Col>

                        <Col lg="6">

                            <div className="experience_img">
                                <img src={ExperienceImg} />
                            </div>

                        </Col>

                    </Row>
                </Container>
            </section>

        {/* ======== Experience section end ======== */}
        {/* ======== Gallery section start ======== */}

            <section>
                <Container>
                    <Row>

                        <Col lg="12">
                            
                            <h1 className="gallery_title">Gallery</h1>

                            <h2 className="gallery_subtitle">Visit Our Customer Tour Gallery</h2>

                        </Col>

                        <Col lg="12">
                            <MasonryImagesGallery />
                        </Col>

                    </Row>
                </Container>
            </section>

        {/* ======== Gallery section end ======== */}

        {/* ======== Testimonial section start ======== */}

            <section>
                <Container>
                    <Row>

                        <Col lg="12">

                            <h1 className="testimonial_title">Fans Love</h1>
                            <h2 className="testimonial_subtitle">What Our Fans Say</h2>

                        </Col>

                        <Col lg="12">
                            <Testimonial />                       
                        </Col>

                    </Row>
                </Container>
            </section>

        {/* ======== Testimonial section end ======== */}

        <NewsLetter />

    </>;

}


export default Home;