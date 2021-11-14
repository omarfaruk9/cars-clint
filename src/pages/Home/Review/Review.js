import React from 'react';
import { RatingView } from 'react-simple-star-rating'

const Review = ({ review }) => {
    const { name, info, rating, img } = review;
    return (
        <div>
            <div className="">
                <img src={img} className="img-fluid" alt="" />
                <div className="">
                    <h2>{name}</h2>
                    <h3>Rating:  <RatingView ratingValue={rating} /* RatingView Props */ /></h3>
                    <p>{info}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;