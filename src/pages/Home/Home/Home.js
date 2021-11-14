import React from 'react';
import NavMenu from '../../Shared/NavMenu/NavMenu';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Review from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <NavMenu />
            <Banner></Banner>
            <About />
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;