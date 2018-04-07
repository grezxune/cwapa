import React from 'react';
import injectSheet from 'react-jss';

import Variables from '../styles/jss/variables';

const FacebookPanel = ({ classes }) => (
    <div className={classes.facebookPanel}>
        <div
            className={`fb-like ${classes.facebookBanner}`}
            data-href="https://facebook.com/centralwisconsinapa"
            data-width="200px"
            data-layout="standard"
            data-action="like"
            data-size="large"
            data-show-faces="true"
            data-share="true"
            data-colorscheme="light"
        />
    </div>
);

const styles = theme => ({
    facebookPanel: {
        gridArea: 'facebook-panel',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: `${Variables.sSize} 0px`
    }
});

const StyledFacebookPanel = injectSheet(styles)(FacebookPanel);

export { StyledFacebookPanel as default, FacebookPanel };
