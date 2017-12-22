import React from 'react';
import moment from 'moment';
const Markdown = require('react-remarkable');

import ImageSlider from '../image-slider';

const NewsItem = (props) => {
    return (
        <div className="news-item">
            <div className="news-item__header">
                <span className="news-item__title">{props.newsItem.title}</span>
                <span className="news-item__date">{moment(props.newsItem.date).format('MMM Do YYYY')}</span>
            </div>

            {
                props.newsItem.images.length > 0 && <ImageSlider images={props.newsItem.images} />
            }

            <div className="news-item__excerpt">
                <span>{props.newsItem.excerpt}</span>
            </div>
        </div>
    );
};

export default NewsItem;

        // <div>
        //     <Markdown source={require('./first-news-post.md')}></Markdown>
        // </div>