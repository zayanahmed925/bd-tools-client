import React from 'react';
import info from '../../assets/img/info.jpg';
const BrandInfo = () => {
    return (
        <div className='bg-gray-800'>
            <div className='w-3/4 mx-auto '>
                <img className='pt-20' src={info} alt="" />
                <h2 className='text-center text-white font-bold'>Leading brand of hand tools whose growth is based on innovation.</h2>
                <p className='text-center pb-16 text-white font-bold'>
                    bd tools is the flagship of SNA Europe. bd tools is an international brand within the hand tool industry, with its products designed and manufactured by SNA Europe. Its roots go back to the industrial revolution of Sweden in the late eighteen hundreds, starting with innovations such as the pipe wrench and the modern adjustable wrench. Since then, the product range has expanded with a total assortment of products that today includes over 14000 hand tools.</p>
            </div>

        </div>
    );
};

export default BrandInfo;