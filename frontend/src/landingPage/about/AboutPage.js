import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';

import Hero from './Hero';
import Team from './Team';

function AboutPage() {
    return ( 
        <>
        <Navbar />
            <Hero />
            <Team />
        <Footer />
        </>
     );
}

export default AboutPage;