import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://bd-tools-server.onrender.com/review', {
        method: 'GET',
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-gray-900 text-3xl font-bold mb-12 font-sans'>Our Client <span className='text-primary'>Review</span> !!</h2>
            <div className='grid lg:grid-cols-2 gap-5  '>
                {
                    reviews?.map(review => <Review
                        review={review}
                        key={review._id}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;