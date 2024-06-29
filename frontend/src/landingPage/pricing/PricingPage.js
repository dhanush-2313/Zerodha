import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';

import Hero from './Hero';
import Brokerage from './Brokerage';


function PricingPage() {
    return ( 
        <>
        <Navbar />
            <Hero />
            <Brokerage />
        <Footer />
        </>
     );
}

export default PricingPage;