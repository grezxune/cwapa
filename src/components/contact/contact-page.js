import React from 'react';
import ContactInfo from './contact-info';

const ContactPage = prop => (
    <div className="content horizontal-container--centered">
        <div className="contact-info">
            <div className="contact-info__section">
                <div className="section-header">
                    <span>League Operators</span>
                </div>
                <ContactInfo
                    name="Jeanna Diedrich"
                    phone="715-323-1554"
                    email="jdiedrich@apaleagues.com"
                />
                <ContactInfo
                    name="Tommy Treb"
                    phone="715-321-1583"
                    email="ttreb@apaleagues.com"
                />
            </div>
        </div>
    </div>
);

export default ContactPage;
