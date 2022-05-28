import React from 'react';
import popular from '../../assets/img/popular1.jpg'
const UpcomingProduct = () => {
    return (
        <div>
            <h2 className='text-center text-gray-900 text-3xl font-bold mb-12 font-sans'>Our <span className='text-primary'>Upcoming</span> Product!!</h2>
            <div className="md:flex mt-8  container mx-auto">
                <div className="w-full bg-[url('https://i.ibb.co/687k0rj/cms-banner-01.jpg')] h-64 md:mx-2 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" >
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <p className="mt-2 text-gray-400">Preorder 30% Discount</p>
                            <h2 className="text-2xl text-white font-semibold">Screwdriver Machine</h2>

                            <button className="flex items-center text-orange-500 mt-4  text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Order Now</span>
                                <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[url('https://i.ibb.co/4R0W176/cms-banner-02.jpg')] h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" >
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <p className="mt-2 text-gray-400">Preorder 25% Discount.</p>
                            <h2 className="text-2xl text-white font-semibold">Best Stone Cutter</h2>

                            <button className="flex items-center mt-4 text-orange-500 text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Order Now</span>
                                <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingProduct;