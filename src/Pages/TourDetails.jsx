import React, {useRef, useState} from 'react';

import '../styles/TourDetails.css';
import TourData from '../assets/data/tours.js';
import calculateAvgRatings from '../Utils/avgRating.js';
import Booking from '../components/Header/Booking/Booking.jsx';
import NewsLetter from '../shared/NewsLetter'

import avatar from '../assets/images/avatar.jpg'

import {Container, Row, Col, Form, ListGroup} from 'reactstrap';
import {useParams} from 'react-router-dom';

const TourDetails = () => {

    const {id} = useParams()

    const reviewMsgRef = useRef('')

    const [tourRating, setTourRating] = useState(null)

    const tour = TourData.find(tour => tour.id === id)

    const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour

    const {totalRating, avgRating} = calculateAvgRatings(reviews)

    //format date

    const options = {day:'numeric', month:'long', year:'numeric'};

    const submitHandler = e => {
        e.preventDefault();

        const reviewText = reviewMsgRef.current.value;

        alert(`${tourRating}, ${reviewText}`)
    }

    return <>
        <section>
            <Container>
                <Row>

                    <Col lg="8">

                        <div classsName="tour_content">

                            <img src={photo} className="tour_content img" />

                            <div className="tour_info">
                                <h2>{title}</h2>

                                <div className="d-flex align-items-center gap-5">

                                    <span className="d-flex align-items-center gap-1">
                                        
                                            <i class="ri-star-fill" style={{color: 'var(--secondary-color)'}}></i> 
                                            {avgRating === 0 ? null : avgRating}
                                            {totalRating === 0 ?
                                            ( 
                                                'Not Rated'
                                            ) : (
                                                <span>({reviews?.length})</span>
                                            )}
                                            
                                        
                                    </span>


                                    <span>
                                        <i class="ri-map-pin-user-fill"></i> {address}
                                    </span>
                                </div>

                                <div className="tour_extra-details">
                                    <span><i class="ri-map-pin-2-line"></i>{city}</span>
                                    <span><i class="ri-money-dollar-circle-line"></i>${price} /Per person</span>
                                    <span><i class="ri-pin-distance-fill"></i>{distance} k/m</span> 
                                    <span><i class="ri-group-line"></i>{maxGroupSize} People</span>
                                </div>

                                <h5>Description</h5>
                                <p>{desc}</p>

                            </div>

                            {/* ======== tour reviews section ======== */}

                                <div className="tour_reviews mt-4">

                                    <h4>Reviews: ({reviews?.length} reviews)</h4>

                                    <Form onSubmit={submitHandler}>

                                        <div className="rating_group d-flex align-items-center gap-3 mb-4">

                                            <span onClick={() => setTourRating(1)}>
                                                1<i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setTourRating(2)}>
                                                2<i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setTourRating(3)}>
                                                3<i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setTourRating(4)}>
                                                4<i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setTourRating(5)}>
                                                5<i class="ri-star-fill"></i>
                                            </span>

                                        </div>


                                        <div className="review_input">

                                            <input type="text" 
                                                placeholder="Express Your Feelings" 
                                                ref={reviewMsgRef} required/>

                                            <button className="btn primary_btn text-white" type="submit">
                                                Submit
                                            </button>

                                        </div>
                                    </Form>

                                    <ListGroup className="user_reviews">
                                        {
                                            reviews?.map(review => (
                                                <div className="review_item">
                                                    <img src={avatar} alt= ""/>

                                                    <div className="w-100">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5>McBryan</h5>

                                                                <p>
                                                                    {new Date('10-11-2023').toLocaleDateString('en-US', options )}
                                                                </p>
                                                            </div>
                                                            <span className="d-flex align-items-center">
                                                                <i class="ri-star-fill"></i>
                                                                <i class="ri-star-fill"></i>
                                                                <i class="ri-star-fill"></i>
                                                                <i class="ri-star-fill"></i>
                                                                <i class="ri-star-fill"></i>
                                                            </span>
                                                        </div>
                                                        <h6>Amazing Tours</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </ListGroup>

                                </div>

                            {/* ======== tour reviews section start ======== */}

                        </div>

                    </Col>

                    <Col lg="4">

                        <Booking tour= {tour} avgRating={avgRating} />

                    </Col>

                </Row>


            </Container>
        </section>

        <NewsLetter />
    </>
};

export default TourDetails;