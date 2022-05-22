import React from 'react';
import banner from '../../assets/img/banner.jpg'
const Banner = () => {
    // var sectionStyle = {
    //     width: "100%",
    //     height: "20px",
    //     backgroundImage: `url(${banner})`
    // };
    <div className="w-full min-h-[100vh] bg-[url('https://cdn.shopify.com/s/files/1/0307/4529/7028/files/slider_banner2.png?v=1583325540')] bg-cover bg-center bg-no-repeat ">
        <h2>Hello</h2>
    </div>
    return (
        <div>
            <div class="carousel w-full ">
                <div id="slide1" class="carousel-item relative w-full ">
                    <div className="w-full min-h-[100vh] bg-[url('https://cdn.shopify.com/s/files/1/0307/4529/7028/files/slider_banner2.png?v=1583325540')] bg-cover bg-center bg-no-repeat ">
                        <div className='grid grid-cols-2 flex items-center ' >

                            <div className=''>
                                <h2 className='text-3xl'>How ar you</h2>
                                <p>hello</p>
                            </div>
                            <div>
                                <h2>jdhjkfdhzjkvxhnczjk</h2>
                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full ">
                    <div className="w-full min-h-[100vh] bg-[url('https://cdn.shopify.com/s/files/1/0307/4529/7028/files/slider_banner1.png?v=1583325538')] bg-cover bg-center bg-no-repeat ">
                        <h2>Hello</h2>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;