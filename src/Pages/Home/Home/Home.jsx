import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogos from './ClientLogosMarquee/ClientLogosMarquee';
import FeatureSection from './Features/Features';
import BeMarchent from './BeMarchent/BeMarchent';
import HowItWorks from './HowItWorks';
import CustomerTestimonials from './CustomerTestimonials';
import FAQ from './FAQ';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <ClientLogos></ClientLogos>
           <FeatureSection></FeatureSection>
           <BeMarchent></BeMarchent>
           <CustomerTestimonials></CustomerTestimonials>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;