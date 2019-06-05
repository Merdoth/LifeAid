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
import Head from 'next/head';
import './common.scss';
import { HOME_STRINGS } from '../constants';

const {
    NUMBER,
} = HOME_STRINGS;

const Footer = () => {
    return (
        <React.Fragment>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
            </Head>
            <div className="footer">
                <div className="footer1 app-content" id="contact">
                    <img className="logo logo-footer" src="/static/img/Group 2.png" alt="Smiley face" />
                    <div className="footer1-text">
                        <p className="footer1-text1">
                            Lorem ipsum dolor sit amet, conse ctetur adipiscing
                            <br />
                            {' '}
                            elit. Curabitur ante leo, finibus quis est ut, tempor
                            <br />
                            {' '}
                            tincidunt ipsum.
                        </p>
                        <span className="reachout-container">
                            <i className="fas fa-phone-volume phone" />
                            {' '}
                            { NUMBER }
                        </span>
                        <br />
                        <span className="reachout-container">
                            <i className="far fa-envelope-open envelope" />
                              office@lifeaid.com
                        </span>
                        <br />
                        <span className="reachout-container">
                            <i className="fas fa-map-marker-alt address" />
                              8 Kelvin Str. Los Angeles, CA
                        </span>
                    </div>
                    <div className="footer1-text2 footer-texts">
                        <p className="footer1-text2-header">Useful Links</p>
                        <div className="useful-links-wrapper">
                            <ul className="useful-links">
                                <li>
                                    <a>Testimonials</a>
                                </li>
                                <li><a>FAQ</a></li>
                                <li><a>Terms & Conditions</a></li>
                                <li><a>Our Partners</a></li>
                                <li><a>Services</a></li>
                            </ul>
                            <ul className="useful-links links2">
                                <li><a>Free Services</a></li>
                                <li><a>About us</a></li>
                                <li><a>News</a></li>
                                <li><a>Contact</a></li>
                                <li><a>Feedback</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer1-text3 footer-texts">
                        <p className="footer1-text2-header">More Interesting Reads...</p>
                        <div className="reads-container">
                            <div className="reads-link">
                                <a>Aliquam ac eleifend metus</a>
                                <p>May 25, 2019</p>

                            </div>
                        </div>
                        <div className="reads-link">
                            <a>Donec in libero sit amet mi vulputate</a>
                            <p>May 25, 2019</p>

                        </div>
                        <div className="reads-link">
                            <a>Aliquam ac eleifend metus</a>
                            <p>May 25, 2019</p>

                        </div>
                    </div>
                </div>
                <div className="footer2 app-content">
                    <div className="footer2-content">
                        <p className="copyright">
                            Copyright ©2019 All rights reserved | This template is made with
                            {' '}
                            <i className="far fa-heart" />
                            {' '}
                            by
                            {' '}
                            <a>LifeAID</a>
                        </p>

                    </div>
                    <div className="icons">
                        <i className="fab fa-instagram" />
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-twitter" />
                        <i className="fab fa-linkedin-in" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
