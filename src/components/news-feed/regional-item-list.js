import React from 'react';
import injectSheet from 'react-jss';

import RegionalItem from './regional-item';
import Variables from '../../styles/jss/variables';

class RegionalItemList extends React.Component {
    render() {
        const multipleItems = this.props.regionalItems.length > 1;

        const regionalItems = this.props.regionalItems.map(item => {
            return (
                <RegionalItem
                    item={item}
                    key={item.date}
                    multipleItems={multipleItems}
                />
            );
        });

        return (
            <div className={this.props.classes.regionalItemList}>
                <span className={this.props.classes.title}>
                    Regionals Qualifiers
                </span>
                {regionalItems}
            </div>
        );
    }
}

const styles = theme => ({
    regionalItemList: {
        width: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'flex-start'
    },
    title: {
        alignSelf: 'center',

        fontSize: Variables.fontSizeXLarge,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',

        padding: `0px ${Variables.sSize}`,
        margin: '10px 0px 0px 0px'
    }
});

const StyledRegionalItemList = injectSheet(styles)(RegionalItemList);

export { StyledRegionalItemList as default, RegionalItemList };
