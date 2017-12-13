import React from 'react';

const ContactInfo = (props) => (
    <div className="contact-info__person">
        { props.name && (
            <div className="contact-info__name">
                <span>{props.name}</span>
                {props.division && (
                    <span className="contact-info__division">({props.division})</span>
                )}
            </div>
        ) }
        { props.phone && (
            <div className="contact-info__link-container">
                <a className="contact-info__link" href={"tel:" + props.phone}><i className="contact-info__icon fa fa-phone" />{props.phone}</a>
            </div>
        ) }
        { props.email && (
            <div className="contact-info__link-container">
                <a className="contact-info__link" href={"mailto:" + props.email}><i className="contact-info__icon fa fa-envelope" />{props.email}</a>
            </div>
        ) }
    </div>
);

export default ContactInfo;