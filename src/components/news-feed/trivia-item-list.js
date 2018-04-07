import React from 'react';
import injectSheet from 'react-jss';

import TriviaItem from './trivia-item';
import Variables from '../../styles/jss/variables';

class TriviaItemList extends React.Component {
    render() {
        const triviaItems = this.props.triviaItems.map(item => {
            return <TriviaItem item={item} key={item.date} />;
        });
        return (
            <div className={this.props.classes.triviaItemList}>
                <span className={this.props.classes.title}>
                    Thursday Trivia Winners
                </span>
                {triviaItems}
            </div>
        );
    }
}

const styles = theme => ({
    triviaItemList: {
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

const StyledTriviaItemList = injectSheet(styles)(TriviaItemList);

export { StyledTriviaItemList as default, TriviaItemList };
