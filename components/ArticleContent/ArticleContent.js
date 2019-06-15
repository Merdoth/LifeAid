/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent-props */
import React, { Component } from 'react';
import YouTube from 'react-youtube';
import Head from 'next/head';
import NavigationBar from '../Common/NavigationBar';
import './articleContent.scss';
import { ARTICLE_CONTENT } from './constants';
import { HOME_STRINGS } from '../constants';
import { SERVICE_STRING } from '../Service/constants';

class ArticleContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this._onReady = this._onReady.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({
            comment: '',
        });
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const {
            ARTICLE_CONTENT_READ1,
            ARTICLE_CONTENT_READ2,
            COMMENT_TEXT1,
            COMMENT_TEXT2,
            COMMENT_TEXT3,
        } = ARTICLE_CONTENT;
        const {
            LIFE,
        } = HOME_STRINGS;
        const {
            GOOGLE_FONTS,
        } = SERVICE_STRING;
        
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              autoplay: 1
            }
        };
        return (
            <React.Fragment>
                <Head>
                    <link href={GOOGLE_FONTS} />
                </Head>
                <div className="header">
                    <NavigationBar />
                    <div className="header-cover">
                        <span className="header-cover-text">
                            <p className="text1">{LIFE}</p>
                            {' '}
                            <p className="text2">Articles</p>
                        </span>
                        <p className="desc">Home / Articles</p>
                    </div>
                </div>
                <div className="articles app-content" id="articles">
                    <p>Why First Aid?</p>
                    <hr />
                    <div className="article-content article1">
                        <p className="article-read">{ARTICLE_CONTENT_READ1}</p>
                        <br/>
                        <div className="video-tag">
                        <YouTube
                            videoId="zMfKzfPteRM"
                            opts={opts}
                            onReady={this._onReady}
                        />
                        </div>
                        <br/>
                        <p className="article-read">{ARTICLE_CONTENT_READ2}</p>
                    </div>
                    <div className="comments-wrapper">
                        <div>
                            <p className="comment-header">Comments</p>
                            <form onSubmit={this.onSubmit}>
                                <input
                                    className="input"
                                    name="comment"
                                    placeholder="Add comments..."
                                    type="text"
                                    value={this.state.comment}
                                    onChange={this.onChange}
                                />
                            </form>
                        </div>
                        <div className="comments">
                            <div className="comment-box">
                                <p className="commenters-name">Helen Ukah</p>
                                <p className="commenters-text">
                                    {COMMENT_TEXT3}
                                </p>
                            </div>
                            <div className="comment-box">
                                <p className="commenters-name">Hilary Uche</p>
                                <p className="commenters-text">
                                    {COMMENT_TEXT2}
                                </p>
                            </div>
                            <div className="comment-box">
                                <p className="commenters-name">Nnanna Uche</p>
                                <p className="commenters-text">
                                    {COMMENT_TEXT1}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ArticleContent;
