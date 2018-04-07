import React from 'react';
import injectSheet from 'react-jss';

import Variables from '../styles/jss/variables';
import MobileMenu from './mobile-menu';

const Banner = ({ classes }) => (
    <div className={classes.banner}>
        <div className={classes.attentionBanner}>
            <span>
                NEXT EVENT: Women's Vegas Qualifier, April 14 at Four Stools
                Short
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
        zIndex: '10'
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
    }
});

const StyledBanner = injectSheet(styles)(Banner);

export { StyledBanner as default, Banner };
