import React from 'react';
import { RatingView } from 'react-simple-star-rating'

const Review = ({ reviewa }) => {
    const { name, review, rating, image } = reviewa;
    console.log(reviewa);
    return (
        <div>
            <div className="">
                <img src={image} className="img" alt="" />
                <div className=" text-center">
                    <h3>{name}</h3>
                    <h5>Rating:  <RatingView ratingValue={rating} /* RatingView Props */ /></h5>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;