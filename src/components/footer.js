import React from 'react';
import injectSheet from 'react-jss';

import Variables from '../styles/jss/variables';

// <img src="/images/cw-apa-logo.svg" alt="Central Wisconsin APA" />
const Footer = ({ classes }) => (
    <div className={classes.footer}>
        <div className={classes.brand}>
            <span>Central Wisconsin APA</span>
        </div>
        <div className={classes.miscLinks}>
            <ul>
                <li>
                    <a href="#">Leave a Suggestion</a>
                </li>
                <li>
                    <a href="https://poolplayers.com" target="_blank">
                        APA Nationals Site
                    </a>
                </li>
                <li>
                    <a href="https://league.poolplayers.com" target="_blank">
                        Members Services
                    </a>
                </li>
                <li>
                    <a
                        href="https://facebook.com/centralwisconsinapa"
                        target="_blank"
                    >
                        Follow us on Facebook
                    </a>
                </li>
            </ul>
        </div>
        <div className={classes.socialLinks}>
            <a href="https://facebook.com/centralwisconsinapa" target="_blank">
                <i className="fa fa-facebook" />
            </a>
            <a href="tel:715-323-1554" target="_blank">
                <i className="fa fa-phone" />
            </a>
            <a href="mailto:jdiedrich@apaleagues.com" target="_blank">
                <i className="fa fa-envelope" />
            </a>
        </div>
        <div className={classes.information}>
            <ul>
                <li>
                    <div className={classes.officeHours}>
                        <div>Office Hours</div>
                        <div>Monday - Friday</div>
                        <div>12pm - 10pm</div>
                    </div>
                </li>
                <li>
                    Jeanna: <a href="tel:7153231554">(715) 323-1554</a>
                </li>
                <li>
                    Tommy: <a href="tel:7153211583">(715) 321-1583</a>
                </li>
            </ul>
        </div>
    </div>
);

const styles = theme => ({
    footer: {
        gridArea: 'footer',
        background: Variables.mainColor,
        fontFamily: Variables.headerFont,
        width: '100%',
        color: Variables.offWhite,
        padding: Variables.sSize,
        display: 'grid',
        gridTemplateAreas:
            "'misc-links social-links information' 'misc-links brand information'",
        gridTemplateColumns: '1fr 1fr 1fr',

        [`@media(max-width: ${Variables.desktopBreakpoint})`]: {
            gridTemplateAreas:
                "'social-links' 'misc-links' 'information' 'brand'",
            gridTemplateColumns: '1fr',
            gridTemplateRows: '50px 1fr 1fr auto'
        }
    },
    socialLinks: {
        gridArea: 'social-links',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& a': {
            margin: `0 ${Variables.sSize}`,
            background: Variables.offWhite,
            color: Variables.mainColor,
            borderRadius: '2px',
            textAlign: 'center',

            '& i': {
                width: '25px'
            }
        }
    },
    information: {
        gridArea: 'information',
        textAlign: 'right',

        '& ul': {
            listStyle: 'none',
            padding: '0px',

            '& a:hover': {
                color: Variables.accentColor
            }
        },

        [`@media(max-width: ${Variables.desktopBreakpoint})`]: {
            textAlign: 'center'
        }
    },
    miscLinks: {
        gridArea: 'misc-links',
        '& ul': {
            listStyle: 'none',
            padding: '0px',

            '& a:hover': {
                color: Variables.accentColor
            }
        },

        [`@media(max-width: ${Variables.desktopBreakpoint})`]: {
            textAlign: 'center'
        }
    },
    brand: {
        gridArea: 'brand',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            width: '300px'
        }
    },
    officeHours: {}
});

const StyledFooter = injectSheet(styles)(Footer);

export { StyledFooter as default, Footer };
