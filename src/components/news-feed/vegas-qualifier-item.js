import React from 'react';
import injectSheet from 'react-jss';

import Variables from '../../styles/jss/variables';

const VegasQualifierItem = ({ item, classes }) => {
    return (
        <div className={classes.vegasQualifierItem} key={item.date}>
            <div className={classes.header}>
                <span className={classes.event}>{item.event}</span>
                <span>CONGRATULATIONS!</span>
            </div>
            <div className={classes.winners}>
                {item.qualifiers.map(qualifier => (
                    <div
                        key={qualifier.name}
                        className={classes.vegasQualifierWinner}
                    >
                        <span>{qualifier.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = theme => ({
    vegasQualifierItem: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'flex-start',
        width: '100%'
    },
    date: {
        fontSize: Variables.fontSizeLarge,
        fontWeight: '500'
    },
    winners: {
        display: 'flex',
        flexFlow: 'column nowrap',
        background: Variables.mainColor,
        color: Variables.offWhite,
        borderRadius: '0px 0px 5px 5px',
        padding: '5px',
        margin: '0px 0px 10px 0px',
        width: '100%'
    },
    vegasQualifierWinner: {
        textAlign: 'center',
        width: '100%',

        '&:not(:last-child)': {
            backgroundImage: `linear-gradient(${Variables.offWhite}, ${
                Variables.offWhite
            })`,
            backgroundSize: '90% 1px',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: '100%',
            backgroundPositionX: '50%'
        }
    },
    header: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '5px',
        borderRadius: '5px 5px 0px 0px',
        background: Variables.accentColor,
        color: Variables.offWhite
    }
});

const StyledVegasQualifierItem = injectSheet(styles)(VegasQualifierItem);

export { StyledVegasQualifierItem as default, VegasQualifierItem };
