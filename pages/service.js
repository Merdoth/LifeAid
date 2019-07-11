import React from 'react';
import Footer from '../components/Common/Footer';
import ServicePage from '../components/Service/ServicePage';
import '../scss/_globals.scss';

const Service = () => (
    <React.Fragment>
        <div className="wrapper">
            <ServicePage />
            <Footer />
        </div>
    </React.Fragment>
);

export default Service;
