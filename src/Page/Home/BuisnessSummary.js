import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import client from '../../assets/img/client.png';
import country from '../../assets/img/country.png';
import feedback from '../../assets/img/feedback.png';
const BuisnessSummary = () => {

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h2 className='text-center text-3xl font-bold mb-12 font-sans'>World wide <span className='text-primary'>Client</span> Trust Us!!</h2>
            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
                <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                        <img className='w-20 ' src={country} alt="" />
                    </div>
                    <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                        50+
                    </h6>
                    <p className="mb-2 font-bold text-md">Countries</p>

                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                        <img className='w-20 ' src={client} alt="" />
                    </div>
                    <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                        100+
                    </h6>
                    <p className="mb-2 font-bold text-md">Happy Client</p>

                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
                        <img className='w-20 ' src={feedback} alt="" />
                    </div>
                    <h6 className="text-4xl font-bold text-deep-purple-accent-400">1K+</h6>
                    <p className="mb-2 font-bold text-md ">Feedback</p>

                </div>

            </div>
        </div>
    );
};

export default BuisnessSummary;