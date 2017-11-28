import React from 'react';
import moment from 'moment';

const EventItem = (props) => {
    return (
        <div className="event-item">
            <div className="event-item__content">
                { props.event.qualifierFor && (
                    <span className="event-item__qualifier-title">{props.event.qualifierFor}</span>
                )}
                <img className="event-item__image" alt={props.title} src={props.event.imageURL} />
                <div className="event-item__info">
                    <div className="event-item__info-item">
                        {props.event.title}
                    </div>
                    <div className="event-item__info-item">
                        {moment(props.event.date).format('MMM Do YYYY')}
                    </div>
                    <div className="event-item__info-item">
                        {props.event.location}
                    </div>
                    <div className="event-item__info-item">
                        {props.event.format}
                    </div>
                    <div className="event-item__info-item">
                        {props.event.bracket}
                    </div>
                    <div className="event-item__info-item">
                        <a href={props.event.facebookURL} target="_blank">Facebook Event</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventItem;