import React from 'react';

const EventItem = (props) => (
    <div className="event-item">
        <div className="event-item__image">
            <img alt={props.title} src={props.imageURL} />
        </div>
        <div className="event-item__info">
            <div className="event-item__title">{props.title}</div>
        </div>
    </div>
);

export default EventItem;