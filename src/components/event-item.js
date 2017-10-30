import React from 'react';

const EventItem = (props) => (
    <div className="event-item">
        <div className="event-item__image">
            <img alt={props.title} src={props.event.imageURL} />
        </div>
        <div className="event-item__info">
            <div className="event-item__title">{props.event.title}</div>
            <div className="event-item__into-item">{props.event.date}</div>
            <div className="event-item__into-item">{props.event.format}</div>
        </div>
    </div>
);

export default EventItem;