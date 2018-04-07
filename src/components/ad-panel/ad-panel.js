import React from 'react';
import injectSheet from 'react-jss';

import Variables from '../../styles/jss/variables';

const AdPanel = ({ classes }) => (
    <div className="cwapa-ad-panel">
        <div className={classes.adPanel}>
            <div className={classes.playFreeAd}>
                <div className={classes.header}>Looking For Free Pool?</div>
                <div className={classes.subHeader}>
                    Find it at{' '}
                    <a href="http://playfree.io" target="_blank">
                        <img
                            src="/images/play-free-brand.svg"
                            className={classes.adImage}
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const styles = theme => ({
    adPanel: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'flex-start',
        background: Variables.offWhite
    },
    playFreeAd: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        color: Variables.offWhite,
        background: '#2c2c2c',
        '& a': {
            color: Variables.accentColor,

            '&:hover': {
                color: Variables.mainColor
            }
        }
    },
    header: {
        width: '100%',
        fontSize: Variables.fontSizeLarge,
        textAlign: 'center'
    },
    subHeader: {
        width: '100%',
        fontSize: Variables.FontSizeSmall,
        textAlign: 'center'
    },
    adImage: {
        margin: '10px'
    }
});

const StyledAdPanel = injectSheet(styles)(AdPanel);

export { StyledAdPanel as default, AdPanel };
