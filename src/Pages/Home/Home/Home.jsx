import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogos from './ClientLogosMarquee/ClientLogosMarquee';
import FeatureSection from './Features/Features';
import BeMarchent from './BeMarchent/BeMarchent';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogos></ClientLogos>
           <FeatureSection></FeatureSection>
           <BeMarchent></BeMarchent>
        </div>
    );
};

export default Home;