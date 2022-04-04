import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card } from 'react-bootstrap';
import useReviews from '../../hook/useReviews';


import './Home.css'
import { useNavigate } from 'react-router-dom';
import Rating from 'react-rating';


const Home = () => {
    const [reviews] = useReviews([]);
    const navigate = useNavigate();


    return (
        <div>
            <div className="main-container">
                <div className="intro-container ml-6 my-10 ">
                    <h1>Book Block Bluster</h1>
                    <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Most Selling Now!!</h2>
                    <p className='text-2xl font-mono font-semibold'>The Twilight Saga is a series of five vampire-themed romance fantasy stories from Summit Entertainment based on the four novels published by author <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-700'>Stephenie Meyer</span>. The series has grossed over $3.4 billion worldwide. </p>
                    <button>Special Discout</button>
                </div>
                <div className="display-container">
                    <img className='mx-auto my-8' src="/images/twilight.jpg" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-5xl font-bold pt-20 pb-10 text-blue-900 '>Customer Reviews</h1>
                <div className="customer-review">
                    {
                        reviews.slice(0, 3).map(review => <p key={review.id}>
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
                <button onClick={() => navigate(`/review`)} className='mb-10 mt-3 pl-10 pr-10 pt-2 pb-2 rounded-lg text-xl text-white bg-blue-500 hover:bg-blue-600'>See More</button>
            </div>
        </div>
    );
};

export default Home;