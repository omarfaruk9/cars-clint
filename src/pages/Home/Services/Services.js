import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `https://frozen-anchorage-07301.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <Container className="service-titele">
            <div>
                <h1 className="fw-bolder text-center my-5 text-success">Our Services</h1>
            </div>
            <div className="row row-cols-sm-1 row-cols-lg-3 row-cols-md-2 g-4">
                {
                    services.slice(0, 6).map(service => <Service
                        service={service}
                    ></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;