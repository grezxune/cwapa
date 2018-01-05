import React from 'react';
import NewsPage from './news/news-page';

const HomePage = () => (
    <div className="vertical-container vertical-container--centered">
        <span className="section-header">WELCOME - To The Best Pool League You Can Play In!</span>
        <div className="box-layout__box box-layout__box--centered vertical-container vertical-container--centered">
            <img className="landing-image" src="/images/apa-landing-image.jpg" alt="Central Wisconsin APA" />
            <span>The Central Wisconsin APA is excited to continue growing! We currently have 3 divisions and are aiming to start our fourth in the summer of 2018!</span>
            <span>Head over to our events page to find all events we have scheduled for APA members to participate in. Also, we have a resource page with some important details about our league, and events players can qualify for in Vegas!</span>
        </div>
    </div>
);

export default HomePage;