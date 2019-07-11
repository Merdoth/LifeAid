/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
import React, { Component } from 'react';
import NavigationBar from '../Common/NavigationBar';
import { ABOUT_STRING } from './constants';
import { HOME_STRINGS } from '../constants';
import './about.scss';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(event) {
        event.preventDefault();
        window.location.href = 'https://forms.gle/BUM9eY8i11Yp4ooZ9';
    }

    render() {
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

        return (
            <div>
                <div className="about-header">
                    <NavigationBar />
                    <div className="about-header-cover">
                        <span className="about-header-cover-text">
                            <p className="about-text1">About </p>
                            {' '}
                            <p className="about-text2">{LIFE}</p>
                        </span>
                        <p className="about-desc">Home  /  About Lifeaid</p>
                    </div>
                </div>
                <div className="about-intro about-app-content">
                    <hr />
                    <p className="about-intro-header">
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
                <div className="about-services about-app-content">
                    <hr />
                    <p>Testimonals</p>
                    <div className="testimonal-wrapper about-services-wrapper">
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
                <div className="team about-app-content">
                    <hr />
                    <p className="about-intro-header">Meet Our Team</p>
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
                <section className="about-consult app-content">
                    <div className="about-consult-text">
                        <p className="about-consult-text1">{CONSULT_TEXT1}</p>
                        <p className="about-consult-text2">{CONSULT_TEXT2}</p>
                    </div>
                    <button type="button" onClick={this.handleButton}>{READ_MORE}</button>
                </section>
            </div>
        );
    }
}

export default AboutPage;
