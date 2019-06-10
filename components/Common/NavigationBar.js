/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './common.scss';
import Link from 'next/link';
import { HOME_STRINGS, NAV_LINK } from '../constants';

const {
    NUMBER,
} = HOME_STRINGS;

const NavigationBar = () => {
    return (
        <div>
            <img className="logo" src="/static/img/Group 2.png" alt="Smiley face" />
            <div className="nav bottomNav">
                <ul className="nav-listitem">
                    {
                        NAV_LINK.map(({ text, link, id }) => (
                            <li key={id}>
                                <Link href={link}>
                                    <a className="listitem">{text}</a>
                                </Link>
                            </li>
                        ))
                    }
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
