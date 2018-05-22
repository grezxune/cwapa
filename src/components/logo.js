import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

import Variables from '../styles/jss/variables';

const Logo = ({ classes }) => (
    <Link to="/" className={classes.logo}>
        <img src="/images/cw-apa-logo.svg" alt="Central Wisconsin APA" />
    </Link>
);

const styles = theme => ({
    logo: {
        gridArea: 'logo',
        height: '200px',
        width: '250px',
        textAlign: 'center',
        background: 'white',
        margin: '0 auto',

        '& img': {
            width: '100%',
            height: '100%',

            [`@media(max-width: ${Variables.desktopBreakpoint})`]: {
                width: 'auto'
            }
        }
    }
});

const StyledLogo = injectSheet(styles)(Logo);

export { StyledLogo as default, Logo };
