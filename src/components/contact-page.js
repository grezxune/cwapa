import React from 'react';
import ContactInfo from './contact-info';

const ContactPage = (prop) => (
    <div className="content-container">
        <div className="contact-info">
            <div className="contact-info__section">
                <div className="contact-info__section__header">
                    <span>League Operators</span>
                </div>
                <ContactInfo
                    name="Jeanna Diedrich"
                    phone="715-323-1554"
                    email="jeanna.j.diedrich@gmail.com" />
                <ContactInfo
                    name="Tommy Treb"
                    phone="715-321-1583"
                    email="tomtrezb2003@gmail.com" />
            </div>
            <div className="contact-info__section">
                <div className="contact-info__section__header">
                    <span>Division Representatives</span>
                </div>
                <ContactInfo
                    name="Brandon Jacoby"
                    phone="715-213-2505"
                    email="ferkeys@gmail.com"
                    division="Wisconsin Rapids" />
            </div>
        </div>
    </div>
);

export default ContactPage;