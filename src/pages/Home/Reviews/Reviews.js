import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://frozen-anchorage-07301.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container className="my-5">
            <div>
                <h1 className="fw-bolder my-5 text-success">Customers Reviews</h1>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                {
                    reviews.map(review => <Review
                        review={review}
                    ></Review>)
                }
            </div>
        </Container>
    );
};

export default Reviews;