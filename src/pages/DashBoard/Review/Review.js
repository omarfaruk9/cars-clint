import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'
import useAuth from '../../../hooks/useAuth';

const Review = () => {

    const { user } = useAuth();
    console.log(user);

    const [rating, setRating] = useState(0) // initial rating value
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        console.log(rate);
        // Some logic
    }

    const reviewRef = useRef();
    const ratingRef = useRef();

    const handleReview = (e) => {
        e.preventDefault();

        const review = reviewRef.current.value;
        const email = user.email;
        const name = user.displayName;
        const image = user.photoURL;

        console.log(review);
        // const rating = ratingRef.current.value;
        const newReview = { review, rating, email, name, image };
        console.log(newReview);
        fetch(`https://frozen-anchorage-07301.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then()

    }
    return (
        <Container>
            <div>
                <h1 className="  my-5 text-success fw-bold">Revice Our Services Please</h1>
                <form onSubmit={handleReview}>

                    <textarea ref={reviewRef} name="" id="" cols="70" rows="6"></textarea>

                    <p>Rating:  <Rating onClick={handleRating} ref={ratingRef} ratingValue={rating} /* Rating Props */ /></p>

                    <input className="btn btn-success" type="submit" value="Submit" />
                </form>
            </div>
        </Container>
    );
};

export default Review;