import React from 'react';

const NewsItem = (props) => (
    <div className="news-item">
        <div className="news-item__title">
            <span>{props.title}</span>
        </div>
        <div className="news-item__content">
            <span>{props.excerpt}</span>
        </div>
    </div>
);

export default NewsItem;