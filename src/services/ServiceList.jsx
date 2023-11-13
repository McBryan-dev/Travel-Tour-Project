import React from 'react';

import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const ServicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet, consectur adipsicing elit",
        id: 0
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectur adipsicing elit",
        id: 1
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet, consectur adipsicing elit",
        id: 2
    }
]

const ServiceList = () => {
    return <>
        {
            ServicesData.map((item, index) => 
                <Col lg="3" key={index}>
                    <ServiceCard item={item} />
                </Col> 
            )
        }

    </>
}

export default ServiceList;