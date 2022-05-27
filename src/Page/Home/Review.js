import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Rating from 'react-rating';
import userProfile from '../../assets/img/user.png';

const Review = ({ review }) => {
    console.log(review.user.photoURL);
    return (
        <div class="my-2 mx-1 max-w-lg flex gap-3 rounded-md bg-white p-2 text-black shadow">
            <div class="mt-2">
                {
                    review.user.photoURL ? <img class="w-28 rounded-full shadow" src={review.user.photoURL} alt="" srcset="" /> : <img class="w-28 rounded-full shadow" src={userProfile} alt="" srcset="" />
                }
            </div>

            <div>

                <div class="flex items-center justify-between py-1 pr-2">
                    <div>
                        <h2 class=" font-bold text-blue-400  pr-4">{review.user.displayName}</h2>
                    </div>
                    {/* <!-- Rate --> */}
                    <div>
                        <div class="flex items-center gap-1">
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

                <div class="p-1">
                    <p class="text-gray-900 border-l-2 px-1 border-blue-500 bg-gray-100 rounded">{review.comments}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;