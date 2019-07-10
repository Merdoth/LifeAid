/* eslint-disable react/jsx-indent-props */
/* eslint consistent-return:0 */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import NavigationBar from '../Common/NavigationBar';
import { REPORT } from './constants';
import { HOME_STRINGS } from '../constants';
import { SERVICE_STRING } from '../Service/constants';
import './article.scss';

class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
        this.handleSend = this.handleSend.bind(this);
    }

handleSend = e => {
    e.preventDefault();
    const data = this.state.name;
    axios.post('api/v1/report', data)
        .then(response => {
            M.toast(response.data.message, 3000, 'green');
        })
        .catch(err => {
            M.toast(err.response.data.message, 3000, 'red');
        });
};

render() {
    const {
        REPORT_TEXT,
        MATERIALIZE,
        MATERIALIZE_JS,
    } = REPORT;

    const {
        GOOGLE_FONTS,
    } = SERVICE_STRING;

    const {
        ARTICLE_READ,
        READ_MORE,
    } = HOME_STRINGS;

    return (
        <React.Fragment>
            <Head>
                <link href={GOOGLE_FONTS} />
                <link href={MATERIALIZE} />
                <link href={MATERIALIZE_JS} />
            </Head>
            <div className="header">
                <NavigationBar />
                <div className="header-cover">

                    <p className="text1">
                        {REPORT_TEXT}
                    </p>
                    <div className="input-container">
                        <input
                            type="file"
                            id="real-input"
                            name="file"
                        />
                        <button
                            className="browse-btn"
                            type="submit"
                            onClick={e => this.handleSend(e)}
                        >
                      SEND FILE
                        </button>
                    </div>
                </div>
            </div>
            <div className="articles app-content" id="articles">
                <p>Our Featured Articles</p>
                <div className="content-wrapper">
                    <div className="article-content article1">
                        <p className="article-content-header">Why First Aid?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <Link href="/articlePage">
                                <a className="article-content-a">
                                    {READ_MORE}
                                ...
                                </a>
                            </Link>
                        </p>
                    </div>
                    <div className="article-content">
                        <p className="article-content-header">What Should be in a First Aid kit?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <Link href="/articlePage">
                                <a className="article-content-a">
                                    {READ_MORE}
                                ...
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="article-content article1">
                        <p className="article-content-header">Why First Aid?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <Link href="/articlePage">
                                <a className="article-content-a">
                                    {READ_MORE}
                                ...
                                </a>
                            </Link>
                        </p>
                    </div>
                    <div className="article-content">
                        <p className="article-content-header">What Should be in a First Aid kit?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <Link href="/articlePage">
                                <a className="article-content-a">
                                    {READ_MORE}
                                ...
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="article-content article1">
                        <p className="article-content-header">Why First Aid?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <Link href="/articlePage">
                                <a className="article-content-a">
                                    {READ_MORE}
                                ...
                                </a>
                            </Link>
                        </p>
                    </div>
                    <div className="article-content">
                        <p className="article-content-header">What Should be in a First Aid kit?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <Link href="/articlePage">
                                <a className="article-content-a">
                                    {READ_MORE}
                                ...
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
                <Pagination className="pagination" defaultCurrent={1} total={3} />
            </div>
        </React.Fragment>
    );
}
}

export default ArticlePage;
