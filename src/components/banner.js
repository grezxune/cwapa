import React from 'react';
import injectSheet from 'react-jss';

import Variables from '../styles/jss/variables';
import MobileMenu from './mobile-menu';

const Banner = ({ classes }) => (
    <div className={classes.banner}>
        <div className={classes.attentionBanner}>
            <span>
                NEXT EVENT:
                <a
                    className={classes.attentionBannerLink}
                    href="https://www.facebook.com/events/281531118996975/"
                    target="_blank"
                >
                    World Qualifier Saturday June 2nd @ Four Stools, Wisconsin
                    Rapids
                </a>
            </span>
            <MobileMenu />
        </div>
    </div>
);

const styles = theme => ({
    banner: {
        gridArea: 'banner',
        background: Variables.offWhite,
        background: 'transparent',
        position: 'sticky',
        top: '0',
        zIndex: '10',
        width: '100%'
    },
    attentionBanner: {
        color: Variables.offWhite,
        background: Variables.accentColor,
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        [`@media(min-width: ${Variables.desktopBreakpoint})`]: {
            justifyContent: 'center'
        }
    },
    attentionBannerLink: {
        textDecoration: 'underline',
        marginLeft: '5px'
    }
});

const StyledBanner = injectSheet(styles)(Banner);

export { StyledBanner as default, Banner };
