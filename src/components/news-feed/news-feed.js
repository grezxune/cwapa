import React from 'react';
import injectSheet from 'react-jss';

import TriviaItemList from './trivia-item-list';
import RegionalItemList from './regional-item-list';
import VegasQualifierItemList from './vegas-qualifier-item-list';
import Variables from '../../styles/jss/variables';

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            triviaItems: [],
            regionalItems: [],
            vegasQualifierItems: []
        };
    }

    componentDidMount = () => {
        this.generateTriviaItems();
        this.generateRegionalsItems();
        this.generateVegasQualifierItems();
    };

    generateTriviaItems = () => {
        this.setState({
            triviaItems: [
                {
                    date: 'Mar 22nd, 2018',
                    winners: [
                        {
                            name: 'Steven Funk',
                            prize: '???'
                        },
                        {
                            name: 'Chelsey Weiler',
                            prize: '???'
                        }
                    ],
                    question: 'This is the trivia question',
                    answer: 'This is the answer'
                },
                {
                    date: 'Mar 15th, 2018',
                    winners: [
                        {
                            name: 'Tim R',
                            prize: '???'
                        },
                        {
                            name: 'Bob O',
                            prize: '???'
                        }
                    ],
                    question: 'This is the trivia question',
                    answer: 'This is the answer'
                },
                {
                    date: 'Mar 8th, 2018',
                    winners: [
                        {
                            name: 'Mark C',
                            prize: '???'
                        },
                        {
                            name: 'Brittney W',
                            prize: '???'
                        }
                    ],
                    question: 'This is the trivia question 2',
                    answer: 'This is the answer 2'
                }
            ]
        });
    };

    generateRegionalsItems = () => {
        this.setState({
            regionalItems: [
                {
                    date: 'March, 2018',
                    qualifiers: [
                        {
                            name: 'Ed O',
                            division: 'Neillsville'
                        },
                        {
                            name: 'Tim R',
                            division: 'Neillsville'
                        }
                    ]
                },
                {
                    date: 'August, 2018',
                    qualifiers: [
                        {
                            name: 'Jeremy F',
                            division: 'Neillsville'
                        }
                    ]
                }
            ]
        });
    };

    generateVegasQualifierItems = () => {
        this.setState({
            vegasQualifierItems: [
                {
                    event: 'Doubles, 2018',
                    qualifiers: [
                        {
                            name: 'Craig D',
                            division: 'Neillsville'
                        },
                        {
                            name: 'Travis W',
                            division: 'Neillsville'
                        }
                    ]
                },
                {
                    event: 'Jack & Jill, 2018',
                    qualifiers: [
                        {
                            name: 'Matt A',
                            division: 'Neillsville'
                        },
                        {
                            name: 'Melissa B',
                            division: 'Neillsville'
                        }
                    ]
                }
            ]
        });
    };

    render() {
        return (
            <div className={this.props.classes.newsFeed}>
                <TriviaItemList triviaItems={this.state.triviaItems} />
                <RegionalItemList regionalItems={this.state.regionalItems} />
                <VegasQualifierItemList
                    vegasQualifierItems={this.state.vegasQualifierItems}
                />
            </div>
        );
    }
}

const styles = theme => ({
    newsFeed: {
        gridArea: 'right-panel',
        maxWidth: '400px',
        width: '85%',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifySelf: 'center',
        justifyContent: 'flex-start',
        [`@media(min-width: ${Variables.desktopBreakpoint})`]: {
            width: '100%',
            padding: `${Variables.sSize} ${Variables.sSize} 0 ${
                Variables.sSize
            }`,
            backgroundImage: `linear-gradient(transparent, ${
                Variables.accentColor
            })`,
            backgroundSize: '1px 100%',
            backgroundPosition: '0 0, 100% 0',
            backgroundRepeat: 'no-repeat'
        }
    }
});

const styledNewsFeed = injectSheet(styles)(NewsFeed);

export { styledNewsFeed as default, NewsFeed };
