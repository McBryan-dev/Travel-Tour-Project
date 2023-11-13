import React,{useRef} from 'react'
import './SearchBox.css';
import {Col, Form, FormGroup} from 'reactstrap'

const SearchBox = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const peopleRef = useRef(0)

    const searchHandler = () => {

        const location = locationRef.current.value
        const distance= distanceRef.current.value
        const people = peopleRef.current.value

        if(location === '' || distance === '' || people === '') {
            return alert('All Fields Are Required')
        }

    }

    return <Col lg="12">
        <div className="search_box">
            <Form className="d-flex align-items-center gap-4">

                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                    <span>
                        <i class="ri-map-pin-5-line"></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where Are You Going?" 
                        ref= {locationRef} />
                    </div>
                </FormGroup>
            
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                    <span>
                        <i class="ri-pin-distance-fill"></i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder="Diskance k/m" 
                        ref= {distanceRef}/>
                    </div>
                </FormGroup>

                <FormGroup className="d-flex gap-3 form_group form_group-last">
                    <span>
                        <i class="ri-group-line"></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder="0" 
                        ref= {peopleRef}/>
                    </div>
                </FormGroup>

                <span className="search_icon" type="submit" onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                </span>

            </Form>
        </div>
    </Col>
}

export default SearchBox;