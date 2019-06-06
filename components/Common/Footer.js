/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import Head from 'next/head';
import './common.scss';
import {
    HOME_STRINGS, ICONS,
    FOOTER_LINK, FOOTER_LINK2
}
    from '../constants';

const {
    NUMBER,
    FONT_AWESOME,
    INTEGRITY,
    FOOTER1_TEXTA,
    FOOTER1_TEXTB,
    FOOTER1_TEXTC,
    OFFICE,
    ADDRESS,
    COPYRIGHT,
} = HOME_STRINGS;

const Footer = () => (
    <React.Fragment>
        <Head>
            <link
                rel="stylesheet"
                href={FONT_AWESOME}
                integrity={INTEGRITY}
                crossOrigin="anonymous"
            />
        </Head>
        <div className="footer">
            <div className="footer1 app-content" id="contact">
                <img className="logo logo-footer" src="/static/img/Group 2.png" alt="Smiley face" />
                <div className="footer1-text">
                    <p className="footer1-text1">
                        {FOOTER1_TEXTA}
                        <br />
                        {' '}
                        {FOOTER1_TEXTB}
                        <br />
                        {' '}
                        {FOOTER1_TEXTC}
                    </p>
                    <span className="reachout-container">
                        <i className="fas fa-phone-volume phone" />
                        {' '}
                        {NUMBER}
                    </span>
                    <br />
                    <span className="reachout-container">
                        <i className="far fa-envelope-open envelope" />
                        {OFFICE}
                    </span>
                    <br />
                    <span className="reachout-container">
                        <i className="fas fa-map-marker-alt address" />
                        {ADDRESS}
                    </span>
                </div>
                <div className="footer1-text2 footer-texts">
                    <p className="footer1-text2-header">Useful Links</p>
                    <div className="useful-links-wrapper">
                        <ul className="useful-links">
                            {
                                FOOTER_LINK.map(({ text, id }) => (<li key={id}><a>{text}</a></li>))
                            }
                        </ul>
                        <ul className="useful-links links2">
                            {
                                FOOTER_LINK2.map(({ text, id }) => (
                                    <li key={id}><a>{text}</a></li>))
                            }
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
                        {COPYRIGHT}
                        {' '}
                        <i className="far fa-heart" />
                        {' '}
                            by
                        {' '}
                        <a href="#">LifeAID</a>
                    </p>

                </div>
                <div className="icons">
                    { ICONS.map(({ icon, id }) => (<i className={icon} key={id} />))}
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default Footer;
