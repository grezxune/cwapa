import React from 'react';
import NewsItem from './news-item';

const HomePage = () => (
    <div className="content-container content-container--page">
        <span className="section-header">News</span>
        <NewsItem title="test title" excerpt="This is our first news post" />
        <NewsItem title="Bylaws have been completed!" excerpt="You can double play, reschedule matches, and much more!" />
    </div>
);

export default HomePage;