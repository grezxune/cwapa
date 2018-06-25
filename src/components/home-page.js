import React from 'react';
import injectSheet from 'react-jss';

import Variables from '../styles/jss/variables';
import NewsPage from './news/news-page';

const HomePage = ({ classes }) => (
    <div className={classes.homePage}>
        <div className={classes.header}>Central Wisconsin APA</div>
        <div className={classes.subHeader}>
            Have Fun. Meet People. Play Pool.
        </div>
        <div className={classes.someName}>
            <div className={classes.leftContent} />
            <div className={classes.rightContent} />
        </div>
        <div className={classes.someName}>
            <div className={classes.leftContent} />
            <div className={classes.rightContent} />
        </div>
        <div className={classes.someName}>
            <div className={classes.leftContent} />
            <div className={classes.rightContent} />
        </div>
        <div className={classes.subHeader}>
            <img
                className="landing-image"
                src="/images/apa-landing-image.jpg"
                alt="Central Wisconsin APA"
            />
        </div>
    </div>
);

const styles = theme => ({
    homePage: {
        gridArea: 'content',
        height: '100%',
        width: '100%',
        color: Variables.darkGrey
    },
    header: {
        fontSize: Variables.fontSizeXLarge,
        width: '100%',
        textAlign: 'center'
    },
    subHeader: {
        fontSize: Variables.fontSizeLarge,
        width: '100%',
        textAlign: 'center'
    }
});

const StyledHomePage = injectSheet(styles)(HomePage);

export { StyledHomePage as default, HomePage };
