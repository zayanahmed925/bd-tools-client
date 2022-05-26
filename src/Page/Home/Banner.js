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
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <div className="w-full min-h-[70vh] bg-[url('https://cdn.shopify.com/s/files/1/0307/4529/7028/files/slider_banner2.png?v=1583325540')] bg-cover bg-center bg-no-repeat ">
                        <div className='grid grid-cols-2 flex items-center ' >

                            <div className=''>
                                <p>hello</p>
                            </div>
                            <div>
                                <h2>jdhjkfdhzjkvxhnczjk</h2>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <div className="w-full min-h-[60vh] bg-[url('https://cdn.shopify.com/s/files/1/0307/4529/7028/files/slider_banner1.png?v=1583325538')] bg-cover bg-center bg-no-repeat ">
                        <h2>Hello</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;