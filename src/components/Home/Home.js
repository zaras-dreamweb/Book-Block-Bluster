import React from 'react';
import useReviews from '../../hook/useReviews';
import Review from '../Review/Review';
import './Home.css'


const Home = () => {
    const [reviews, setReviews] = useReviews([]);
    console.log(reviews);

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
            <div className="customer-review">
                <h1 className='text-5xl font-bold pt-10 text-blue-900 '>Best Reviews</h1>
                {
                    reviews.slice(0, 3).map(review => <p key={review.id}>
                        <img src={review.image} alt="" />

                    </p>)
                }

            </div>
        </div>
    );
};

export default Home;