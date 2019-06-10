import React from 'react';
import NavigationBar from '../Common/NavigationBar';
import { HOME_STRINGS } from '../constants';
import './article.scss';

const {
    ARTICLE_READ,
    READ_MORE,
} = HOME_STRINGS;

const ArticlePage = () => {
    return (
        <div>
            <NavigationBar />
            <div className="articles app-content" id="articles">
                <p>Our Featured Articles</p>
                <div className="content-wrapper">
                    <div className="article-content article1">
                        <p className="article-content-header">Why First Aid?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <a className="article-content-a" href="/articlePage">
                                {READ_MORE}
                                ...
                            </a>
                        </p>
                    </div>
                    <div className="article-content">
                        <p className="article-content-header">What Should be in a First Aid kit?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <a className="article-content-a" href="/articlePage">
                                {READ_MORE}
                                ...
                            </a>
                        </p>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="article-content article1">
                        <p className="article-content-header">Why First Aid?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <a className="article-content-a" href="/articlePage">
                                {READ_MORE}
                                ...
                            </a>
                        </p>
                    </div>
                    <div className="article-content">
                        <p className="article-content-header">What Should be in a First Aid kit?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <a className="article-content-a" href="/articlePage">
                                {READ_MORE}
                                ...
                            </a>
                        </p>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="article-content article1">
                        <p className="article-content-header">Why First Aid?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <a className="article-content-a" href="/articlePage">
                                {READ_MORE}
                                ...
                            </a>
                        </p>
                    </div>
                    <div className="article-content">
                        <p className="article-content-header">What Should be in a First Aid kit?</p>
                        <p className="article-read">
                            {ARTICLE_READ}
                            <a className="article-content-a" href="/articlePage">
                                {READ_MORE}
                                ...
                            </a>
                        </p>
                    </div>
                </div>
                <p className="pagination"> 1  |  2  |  3  |  4  |  ...</p>
            </div>
        </div>
    );
};

export default ArticlePage;
