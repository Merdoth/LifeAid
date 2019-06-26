import React from 'react';
import '../scss/_globals.scss';
import RegisterPage from '../components/Register/RegisterPage';
import NavigationBar from '../components/Common/NavigationBar';

const Register = () => (
    <React.Fragment>
        <NavigationBar />
        <RegisterPage />
    </React.Fragment>
);

export default Register;
