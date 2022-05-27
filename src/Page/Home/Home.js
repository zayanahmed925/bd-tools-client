import React from 'react';
import Footer from '../Shared/Footer/Footer';



import Banner from './Banner';
import BuisnessSummary from './BuisnessSummary';
import PopularProduct from './PopularProduct';
import Reviews from './Reviews';
import Tools from './Tools';
import UpcomingProduct from './UpcomingProduct';

const Home = () => {
    return (
        <div className='relative'>
            <Banner></Banner>

            <Tools></Tools>
            <PopularProduct></PopularProduct>
            <UpcomingProduct></UpcomingProduct>
            <BuisnessSummary></BuisnessSummary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;