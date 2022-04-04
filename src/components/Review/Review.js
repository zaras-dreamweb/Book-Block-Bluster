import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'
import { Card } from 'react-bootstrap';
import useReviews from '../../hook/useReviews';
import Rating from 'react-rating';

const Review = () => {
    const [reviews] = useReviews([]);

    return (
        <div className='review-div'>
            <h1>Best Customer Reviews</h1>
            <div className="customer-review-div">
                {
                    reviews.map(review => <p key={review.id} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className='h-60 w-40 rounded-full' variant="top" src={review.image} />
                            <Card.Body>
                                <Card.Title><strong>Name:</strong> {review.name}</Card.Title>
                                <Card.Text>
                                    <strong>Review:</strong> {review.reviews}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Rating:</strong>
                                    <Rating
                                        initialRating={review.rating}
                                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                                        readonly
                                    ></Rating>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </p>)
                }

            </div>
        </div>
    );
};

export default Review;