import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import BrandInfo from './BrandInfo';
import BuisnessSummary from './BuisnessSummary';
import Tools from './Tools';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Tools></Tools>
            <BuisnessSummary></BuisnessSummary>
            <BrandInfo></BrandInfo>
            <Footer></Footer>
        </div>
    );
};

export default Home;