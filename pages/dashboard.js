import React from 'react';
import Footer from '../components/Common/Footer';
import '../scss/_globals.scss';
import NavigationBar from '../components/Common/NavigationBar';
import DashboardPage from '../components/AidDashboard/Dashboard';

const Dashboard = () => (
    <React.Fragment>
        <NavigationBar />
        <DashboardPage />
        <Footer />
    </React.Fragment>
);

export default Dashboard;
