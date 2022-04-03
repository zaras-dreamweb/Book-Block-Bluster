import React from 'react';
import useReviews from '../../hook/useReviews';

const Review = () => {
    const [reviews, setReviews] = useReviews([]);

    return (
        <div>
            <h1>This is Review Page</h1>
            {
                reviews.map(review => <p key={review.id} > {review.name}</p>)
            }


        </div>
    );
};

export default Review;