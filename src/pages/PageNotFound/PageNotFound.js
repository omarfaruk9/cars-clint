import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className="notfound">
            <div className="">
                <Link to="/">
                    <button className="btn d-block mx-auto my-5 btn-success mx-auto">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;