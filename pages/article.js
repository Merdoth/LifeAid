import React from 'react';
import Footer from '../components/Common/Footer';
import ArticlePage from '../components/Article/ArticlePage';
import '../scss/_globals.scss';

const Article = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <ArticlePage />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Article;
