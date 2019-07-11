/* eslint arrow-parens:0 */
/* eslint arrow-body-style:0 */
/* eslint no-lone-blocks:0 */
/* eslint react/prefer-stateless-function:0 */
/* eslint no-underscore-dangle:0 */
/* eslint react/prop-types:0 */
/* eslint react/destructuring-assignment:0 */
import React from 'react';
import './article.scss';
import { Row, Col } from 'antd';
import Link from 'next/link';

export default class Articles extends React.Component {
    displayArticles = (articles) => {
        return (
            <Col key={articles._id} xs={{ offset: 2, span: 6 }} lg={{ offset: 2, span: 6 }}>
                <div className="article-content">
                    <p className="article-content-header">{articles.title}</p>
                    <p className="article-read">
                        {articles.intro}
                        <br />
                        <br />
                        <Link className="article-content-a" href={`/article/${articles._id}`}>
                            Continue Reading
                                ...
                        </Link>
                    </p>
                </div>
            </Col>
        );
    }

    render() {
        const { articles } = this.props;
        const listArticles = articles.map(this.displayArticles);
        return (
            <div className="gutter-example">
                <Row gutter={12}>
                    { listArticles }
                </Row>
            </div>
        );
    }
}
