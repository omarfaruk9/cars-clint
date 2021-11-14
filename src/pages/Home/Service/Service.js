import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {

    const { name, price, info, img } = service;
    return (
        <div>
            <div className="shadow overflow-hidden h-100 rounded-2">
                <img src={img} className="service-img" alt="" />
                <div className="p-3">
                    <h2>{name}</h2>
                    <h4>Prices: {price} $</h4>
                    <p>{info}</p>
                </div>
                <div className="p-3">
                    <Link to={`/buynow/${service._id}`}>
                        <button className="btn btn-outline-success">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;