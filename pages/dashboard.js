import React from 'react';
import '../scss/_globals.scss';
import NavigationBar from '../components/Common/NavigationBar';
import DashboardPage from '../components/AidDashboard/Dashboard';

const Dashboard = () => (
    <React.Fragment>
        <NavigationBar />
        <DashboardPage />
    </React.Fragment>
);

export default Dashboard;
