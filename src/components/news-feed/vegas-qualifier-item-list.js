import React from 'react';
import injectSheet from 'react-jss';

import VegasQualifierItem from './vegas-qualifier-item';
import Variables from '../../styles/jss/variables';

class VegasQualifierItemList extends React.Component {
    render() {
        const vegasQualifierItems = this.props.vegasQualifierItems.map(item => {
            return <VegasQualifierItem item={item} key={item.event} />;
        });

        return (
            <div className={this.props.classes.vegasQualifierItemList}>
                <span className={this.props.classes.title}>
                    Vegas Event Qualifiers
                </span>
                {vegasQualifierItems}
            </div>
        );
    }
}

const styles = theme => ({
    vegasQualifierItemList: {
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

const StyledVegasQualifierItemList = injectSheet(styles)(
    VegasQualifierItemList
);

export { StyledVegasQualifierItemList as default, VegasQualifierItemList };
