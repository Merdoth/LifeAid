import React from 'react';
import Footer from '../components/Common/Footer';
import '../scss/_globals.scss';
import RegisterPage from '../components/Register/RegisterPage';
import NavigationBar from '../components/Common/NavigationBar';

const Register = () => (
    <React.Fragment>
        <NavigationBar />
        <RegisterPage />
        <Footer />
    </React.Fragment>
);

export default Register;
