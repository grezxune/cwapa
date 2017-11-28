import React from 'react';

const Footer = (props) => (
    <div className="footer">
        <span>Central Wisconsin APA</span>
        <div className="footer__social-links">
            <a href="https://facebook.com/centralwisconsinapa" target="_blank"><i className="fa fa-facebook"/></a>
            <a href="tel:715-323-1554" target="_blank"><i className="fa fa-phone"/></a>
            <a href="mailto:jdiedrich@apaleagues.com" target="_blank"><i className="fa fa-envelope"/></a>
        </div>
    </div>
);

export default Footer;