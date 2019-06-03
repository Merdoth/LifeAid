/* eslint react/jsx-filename-extension: 0 */
/* eslint react/jsx-no-literals: 0 */
/* eslint arrow-body-style: 0 */
import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <div>Life Aid</div>
            <Link href="/login">Login</Link>
        </div>
    );
};

export default Index;
