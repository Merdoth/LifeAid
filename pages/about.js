import React from 'react';
import Footer from '../components/Common/Footer';
import AboutPage from '../components/About/AboutPage';
import '../scss/_globals.scss';

const About = () => (
    <React.Fragment>
        <div className="wrapper">
            <AboutPage />
            <Footer />
        </div>
    </React.Fragment>
);

export default About;
