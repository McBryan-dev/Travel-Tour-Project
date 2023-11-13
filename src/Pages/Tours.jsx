import React, {useState, useEffect} from 'react';

import TourData from '../assets/data/tours.js';
import TourCard from '../shared/TourCard.jsx';
import SearchBox from '../shared/SearchBox.jsx';
import NewsLetter from '../shared/NewsLetter'
import '../styles/Tour.css';

import {Container, Row, Col} from 'reactstrap'

import CommonSection from '../shared/CommonSection'

const Tours = () => {

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect (() => {

        const pages = Math.ceil(5 / 4);

        setPageCount(pages)
    }, [page])



    return <>

        <CommonSection title= {"All Tours"}/>

        <section className= "pt-0">

            <Container>
                <Row>
                    <SearchBox />
                </Row>
            </Container>

        </section>

        <section>
            <Container>
                <Row>

                    {
                        TourData?.map( tour => ( <Col lg="3" className="mb-4" key={tour.id}>
                            <TourCard tour= {tour} />
                        </Col> ))
                    }

                    <Col lg="12">
                        <div className="pagination d-flex align-items-center
                        justify-content-center mt-4 gap-3">
                            {[...Array(pageCount).keys()].map(number => (

                                <span key={number} onClick={() => setPage(number)}
                                className={page === number ? 'active_page' : '' }>
                                    {number + 1}
                                </span>

                            ))}
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
        <NewsLetter />
    </>
};

export default Tours;