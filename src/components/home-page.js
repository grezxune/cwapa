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
        <div className="">
            <img
                className="landing-image"
                src="/images/apa-landing-image.jpg"
                alt="Central Wisconsin APA"
            />
            <span>
                The Central Wisconsin APA is excited to continue growing! We
                currently have 3 divisions and are aiming to start our fourth in
                the summer of 2018!
            </span>
            <span>
                Head over to our events page to find all events we have
                scheduled for APA members to participate in. Also, we have a
                resource page with some important details about our league, and
                events players can qualify for in Vegas!
            </span>
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
