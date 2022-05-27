import React from 'react';
import Footer from '../Shared/Footer/Footer';



import Banner from './Banner';
import BrandInfo from './BrandInfo';
import BuisnessSummary from './BuisnessSummary';
import PopularProduct from './PopularProduct';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='relative'>
            <Banner></Banner>

            <Tools></Tools>
            <PopularProduct></PopularProduct>
            <BuisnessSummary></BuisnessSummary>
            <Reviews></Reviews>
            <BrandInfo></BrandInfo>
            <Footer></Footer>
        </div>
    );
};

export default Home;