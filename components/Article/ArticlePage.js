/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import NavigationBar from '../Common/NavigationBar';
import { REPORT } from './constants';
import { HOME_STRINGS } from '../constants';
import { SERVICE_STRING } from '../Service/constants';

import './article.scss';

const {
    REPORT_TEXT,
} = REPORT;

const {
    GOOGLE_FONTS,
} = SERVICE_STRING;

const {
    ARTICLE_READ,
    READ_MORE,
} = HOME_STRINGS;

const ArticlePage = () => (
    <React.Fragment>
        <Head>
            <link href={GOOGLE_FONTS} />
        </Head>
        <div className="header">
            <NavigationBar />
            <div className="header-cover">

                <p className="text1">
                    {REPORT_TEXT}
                </p>
                <div className="input-container">
                    <input type="file" id="real-input" />
                    <button className="browse-btn" type="button">
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

export default ArticlePage;
