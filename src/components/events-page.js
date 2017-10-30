import React from 'react';
import EventItem from './event-item';

const EventsPage = (prop) => {
    const event = { title: 'Halloween Spooktacular', imageURL: '/images/banner.jpg', date: '10/28/2017', format: 'Modified Single Elimination'};
    return (
        <div className="content-container">
            <EventItem event={event} />
        </div>
    );
};

export default EventsPage;