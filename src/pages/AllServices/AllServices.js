import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavMenu from '../Shared/NavMenu/NavMenu';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `https://frozen-anchorage-07301.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <>
            <NavMenu />
            <Container className="service-titele">

                <div>
                    <h1 className="fw-bolder text-center my-5 text-success">Our Services</h1>
                </div>
                <div className="row row-cols-sm-1 row-cols-lg-4 row-cols-md-2 g-4">
                    {
                        services.map(service => <div>
                            <div className="shadow overflow-hidden h-100 rounded-2">
                                <img src={service.img} className="service-img" alt="" />
                                <div className="p-3">
                                    <h2>{service.name}</h2>
                                    <h4>Prices: {service.price} $</h4>
                                    <p>{service.info}</p>
                                </div>
                                <div className="pb-3 ps-3">
                                    <Link to={`/buynow/${service._id}`}>
                                        <button className="btn btn-outline-success">Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Container>
        </>
    );
};

export default AllServices;