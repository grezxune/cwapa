import React from 'react';
import moment from 'moment';
const Markdown = require('react-remarkable');

const NewsItem = (props) => {
    return (
        <div className="news-item">
            <div className="news-item__title">
                <span>{props.newsItem.title}</span>
                <div>
                    <span>{moment(props.newsItem.date).format('MMM Do YYYY')}</span>
                </div>
            </div>
            <div className="news-item__content">
                <span>{props.newsItem.excerpt}</span>
            </div>
        </div>
    );
};

export default NewsItem;

        // <div>
        //     <Markdown source={require('./first-news-post.md')}></Markdown>
        // </div>