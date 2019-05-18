/* eslint react/jsx-filename-extension: 0 */
/* eslint react/jsx-no-literals: 0 */
/* eslint arrow-body-style: 0 */
import React from 'react';
import Link from 'next/link';
import Auth from '../server/authentication/Auth';

const auth = new Auth();

class Callback extends React.Component {
    componentDidMount() {
        auth.handleAuthentication();
    }

    render() {
        return (
            <div>Life Aid</div>
        );
    }
}

const Index = () => {
    return (
        <div>
            <Callback />
            <Link href="/login">Login</Link>
        </div>
    );
};

export default Index;
