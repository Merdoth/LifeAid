import React from 'react';
import NavigationBar from '../Common/NavigationBar';
import { ABOUT_STRING } from './constants';
import { HOME_STRINGS } from '../constants';
import './about.scss';

const {
    INTRO_HEADER_TEXT,
    NINTY,
    TEST1,
    TEST2,
    CLIENT,
    INTRO_TEXT1,
    INTRO_TEXT2,
} = ABOUT_STRING;

const {
    READ_MORE,
    LIFE,
    CONSULT_TEXT1,
    CONSULT_TEXT2,
} = HOME_STRINGS;

const AboutPage = () => {
    return (
        <div>
            <div className="header">
                <NavigationBar />
                <div className="header-cover">
                    <span className="header-cover-text">
                        <p className="text1">About </p>
                        {' '}
                        <p className="text2">{LIFE}</p>
                    </span>
                    <p className="desc">Home  /  About Lifeaid</p>
                </div>
            </div>
            <div className="intro app-content">
                <hr />
                <p className="intro-header">
                    {INTRO_TEXT1}
                    <br />
                    {' '}
                    {INTRO_TEXT2}
                </p>
                <span>
                    <p>
                        {INTRO_HEADER_TEXT}
                        <br />
                        <br />
                        <br />
                        {' '}
                        <button type="button">{READ_MORE}</button>
                    </p>
                    <div className="animation-container">
                        <div className="animation-content">
                            <div className="animation-circle" id="loader" />
                            <div className="animation-circle" id="loader2" />
                            <span id="loader-text">{NINTY}</span>
                            <p>Hardwork</p>
                        </div>
                        <div className="animation-content">
                            <div className="animation-circle" id="loader" />
                            <div className="animation-circle" id="loader2" />
                            <span id="loader-text">{NINTY}</span>
                            <p>Passion</p>
                        </div>
                        <div className="animation-content">
                            <div className="animation-circle" id="loader" />
                            <div className="animation-circle" id="loader2" />
                            <span id="loader-text">{NINTY}</span>
                            <p>Dedication</p>
                        </div>
                    </div>
                </span>
            </div>
            <div className="services app-content">
                <hr />
                <p>Testimonals</p>
                <div className="testimonal-wrapper services-wrapper">
                    <div className="testimonal-content">
                        <i className="fas fa-quote-left qoute" />
                        <p className="test">{TEST1}</p>
                        <p className="test-name">
                            ~ Isimeme Iwu,
                            {' '}
                            <i>{CLIENT}</i>
                        </p>
                    </div>
                    <div className="testimonal-content">
                        <i className="fas fa-quote-left qoute" />
                        <p className="test">{TEST2}</p>
                        <p className="test-name">
                            ~ Oluwa Ayo,
                            {' '}
                            <i>{CLIENT}</i>
                        </p>
                    </div>
                </div>
            </div>
            <div className="team app-content">
                <hr />
                <p className="intro-header">Meet Our Team</p>
                <div className="team-img-container">
                    <div className="team-img-content">
                        <img className="team-mem" src="/static/img/faithy.png" alt="Smiley face" />
                        <span className="team-details details1">
                            <p className="name">Faith Omojola</p>
                            <p className="role">
                                CEO,
                                <i>
                                    {' '}
                                    {LIFE}
                                </i>
                            </p>
                        </span>
                    </div>
                    <div className="team-img-content">
                        <img className="team-mem" src="/static/img/Meme.png" alt="Smiley face" />
                        <span className="team-details details2">
                            <p className="name">Chimereucheya Okereke</p>
                            <p className="role">
                                Team Lead,
                                <i>
                                    {' '}
                                    {LIFE}
                                </i>
                            </p>
                        </span>
                    </div>
                    <div className="team-img-content">
                        <img className="team-mem" src="/static/img/mira.png" alt="Smiley face" />
                        <span className="team-details details3">
                            <p className="name">Miracle Ayodele</p>
                            <p className="role">
                                CTO,
                                <i>
                                    {' '}
                                    {LIFE}
                                </i>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <section className="consult app-content">
                <div className="consult-text">
                    <p className="consult-text1">{CONSULT_TEXT1}</p>
                    <p className="consult-text2">{CONSULT_TEXT2}</p>
                </div>
                <button type="button">{READ_MORE}</button>
            </section>
        </div>
    );
};

export default AboutPage;
