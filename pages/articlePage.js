import fetch from 'isomorphic-unfetch';
import React from 'react';
import Footer from '../components/Common/Footer';
import ArticleContent from '../components/ArticleContent/ArticleContent';
import '../scss/_globals.scss';

const ArticlePage = (props) => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <ArticleContent content={props.article.data}/>
                <Footer />
            </div>
        </React.Fragment>
    );
};

ArticlePage.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://live-aid.herokuapp.com/api/v1/aids/${id}`);
    const article = await res.json();
    console.log(`Fetched show: ${article.data.aid.title}`);
    return { article };
};

export default ArticlePage;
