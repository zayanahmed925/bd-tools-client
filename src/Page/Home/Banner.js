import React from 'react';
import banner from '../../assets/img/banner.jpg'
const Banner = () => {
    // var sectionStyle = {
    //     width: "100%",
    //     height: "20px",
    //     backgroundImage: `url(${banner})`
    // };
    // <div className="w-full min-h-[70vh] bg-[url('https://cdn.shopify.com/s/files/1/0307/4529/7028/files/slider_banner2.png?v=1583325540')] bg-cover bg-center bg-no-repeat ">
    //     <h2>Hello</h2>
    // </div>
    return (
        <div>
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="https://i.ibb.co/nQJf88z/banner-3.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Power <span className='text-primary'>Tools</span>
                            <br className="hidden md:block" />
                            New collection{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                Available
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            “It's best to have your tools with you. If you don't, you're apt to find something you didn't expect and get discouraged.
                        </p>
                        <div className="flex items-center">
                            <a
                                href="/"
                                className="inline-flex btn btn-primary items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </a>
                            <button className="flex items-center mt-4 text-orange-500 text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>More Details</span>
                                <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;