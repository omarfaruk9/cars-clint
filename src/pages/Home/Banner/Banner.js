import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-1">
                    <div className="into  text-light">
                        <h1 className="my-5">BD CAR SHOP</h1>
                        <p>
                            Your new car is more than just a set of wheels. It’s an extension of your personality. And if you’ve got a long commute or some road trips planned, you’re going to be spending a lot of time behind the wheel.
                        </p>
                        <Link to="allservice">
                            <button className="btn btn-lg btn-outline-dark text-light">EXPOLOR</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;