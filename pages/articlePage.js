import React from 'react';
import Footer from '../components/Common/Footer';
import ArticleContent from '../components/ArticleContent/ArticleContent';
import '../scss/_globals.scss';

const ArticlePage = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <ArticleContent />
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default ArticlePage;
