/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
/* eslint react/jsx-filename-extension: 0 */
/* eslint react/jsx-no-literals: 0 */
/* eslint arrow-body-style: 0 */
// eslint-disable-next-line react/jsx-no-comment-textnodes
// eslint-disable-next-line react/jsx-no-undef
// eslint-disable-next-line jsx-a11y/anchor-is-valid

import React from 'react';
import './common.scss';
import Link from 'next/link';
import { HOME_STRINGS } from '../constants';

const {
    NUMBER,
} = HOME_STRINGS;

const NavigationBar = () => {
    return (
        <div>
            <img className="logo" src="/static/img/Group 2.png" alt="Smiley face" />
            <div className="nav bottomNav">
                <ul className="nav-listitem">
                    <li>
                        <Link href="/">
                            <a className="listitem">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="listitem">About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/service">
                            <a className="listitem">Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <a className="listitem">Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a className="listitem">Login</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="nav topNav">
                <span className="emergence-number-container">
                    <p className="emergence-number">
                        For Emergencies:
                        {' '}
                        {NUMBER}
                    </p>

                </span>
            </div>
        </div>
    );
};

export default NavigationBar;
