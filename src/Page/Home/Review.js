import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Rating from 'react-rating';
import userProfile from '../../assets/img/user.png';

const Review = ({ review }) => {
    return (
        <div className="my-2 mx-1 max-w-lg flex gap-3 rounded-md bg-white p-2 text-black shadow">
            <div className="mt-2">
                {
                    review.user.photoURL ? <img className="w-28 rounded-full shadow" src={review.user.photoURL} alt="" srcset="" /> : <img className="w-28 rounded-full shadow" src={userProfile} alt="" srcset="" />
                }
            </div>

            <div>

                <div className="flex items-center justify-between py-1 pr-2">
                    <div>
                        <h2 className=" font-bold text-blue-400  pr-4">{review.user.displayName}</h2>
                    </div>
                    {/* <!-- Rate --> */}
                    <div>
                        <div className="flex items-center gap-1">
                            <Rating
                                initialRating={review.reviewStar}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                                readonly
                            >
                            </Rating>
                        </div>
                    </div>
                </div>

                <div className="p-1">
                    <p className="text-gray-900 border-l-2 px-1 border-blue-500 bg-gray-100 rounded">{review.comments}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;