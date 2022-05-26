import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/review', {
        method: 'GET',
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            <p>{reviews.length}</p>
            <div className='grid lg:grid-cols-2 gap-5  '>
                {
                    reviews?.map(review => <Review
                        review={review}
                        key={review._id}
                    ></Review>)
                }
            </div>

            {/* <div className=' card bg-base-100 shadow-xl'>
                        <div className='card-body '>
                            <h2 class="card-title">{review.comments}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <Rating
                                initialRating={review.reviewStar}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                                readonly
                            >

                            </Rating>
                        </div>
                    </div> */}

        </div>
    );
};

export default Reviews;