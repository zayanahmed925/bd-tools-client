import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Rating from 'react-rating';
import auth from '../../firebase.init';

const Review = ({ review }) => {
    const [user] = useAuthState(auth);
    // console.log(user);
    return (
        <div class="my-2 mx-1 max-w-lg flex gap-3 rounded-md bg-white p-2 text-black shadow">
            {/* <!-- Photo --> */}
            <div class="mt-2">
                <img class="w-28 rounded-full shadow" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" srcset="" />
            </div>
            {/* <!-- Content --> */}
            <div>
                {/* <!-- Header --> */}
                <div class="flex items-center justify-between py-1 pr-2">
                    {/* <!-- Author --> */}
                    <div>
                        <a href="#" class="text-blue-400 hover:underline">{user?.displayName}</a>
                        {/* <span class="text-sm font-thin text-gray-500"> 3 days</span> */}
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
                {/* <!-- Context --> */}
                <div class="p-1">
                    <p class="text-gray-900 border-l-2 px-1 border-blue-500 bg-gray-100 rounded">{review.comments}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;