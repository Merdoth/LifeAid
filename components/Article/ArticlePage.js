/* eslint-disable react/jsx-indent-props */
/* eslint consistent-return:0 */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint indent:0 */
/* eslint arrow-parens:0 */
/* eslint consistent-return:0 */
/* eslint arrow-body-style:0 */
/* eslint react/destructuring-assignment:0 */
/* eslint object-shorthand:0 */
/* eslint react/no-access-state-in-setstate:0 */
/* eslint prefer-template:0 */
/* eslint no-console:0 */
/* eslint no-unused-vars:0 */
import React, { Component } from 'react';
import axios from 'axios';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import NavigationBar from '../Common/NavigationBar';
import { REPORT } from './constants';
import { SERVICE_STRING } from '../Service/constants';
import './article.scss';
import ArticleList from './Articles';

class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            name: '',
        };
        this.handleSend = this.handleSend.bind(this);
    }

    componentDidMount() {
        axios.get('/api/v1/aids')
            .then(res => {
                this.setState((prevState) => {
                    return { articles: prevState.articles.concat(res.data.data.aids) };
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSend = e => {
        e.preventDefault();
        const data = this.state.name;
        axios.post('api/v1/report', data)
            .then(response => {
                M.toast(response.data.message, 3000, 'green');
            })
            .catch(err => {
                M.toast(er.response.data.message, 3000, 'red');
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

        const { articles } = this.state;

        return (
            <React.Fragment>
                <Head>
                    <link href={GOOGLE_FONTS} />
                    <link href={MATERIALIZE} />
                    <link href={MATERIALIZE_JS} />
                </Head>
                <div className="article-header">
                    <NavigationBar />
                    <div className="article-header-cover">

                        <p className="article-text1">
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
                <div className="articles article-app-content" id="articles">
                    <p>Our Featured Articles</p>
                    <div className="content-wrapper">
                        <ArticleList articles={articles} />
                    </div>
                    <Pagination className="pagination" defaultCurrent={1} total={3} />
                </div>
            </React.Fragment>
        );
    }
}

export default ArticlePage;
