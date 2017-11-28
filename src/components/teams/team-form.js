import React from 'react';
import moment from 'moment';

import customAxios from '../../network/axios';

class TeamForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerFormItems: [],
            team: props.team ? props.team : ({
                divisionName: '',
                teamName: '',
                homeLocation: '',
                dayOfPlay: '',
                existingTeam: '',
                useCurrentRoster: '',
                players: [{
                    isCaptain: '',
                    isCoCaptain: '',
                    name: {
                        first: '',
                        last: ''
                    },
                    phone: {
                        canText: '',
                        number: ''
                    }
                }]
            })
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('Team Form Props: \n', nextProps);
        this.setState({ 
            team: {...nextProps.team}
        });
    }

    addPlayer = () => {
        const newPlayer = {
            isCaptain: '',
            isCoCaptain: '',
            name: {
                first: '',
                last: ''
            },
            phone: {
                canText: '',
                number: ''
            }
        };

        this.setState((prevState, props) => {
            const newPlayers = prevState.team.players.concat(newPlayer);
            // const newPlayerItems = newPlayers.map((player) => {
            //     return <PlayerFormItem />
            // });

            return {
                team: {
                    ...prevState.team,
                    players: newPlayers
                }
            };
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        this.props.onSubmit({
            team: this.state.team
        });
    };

    render() {
        return (
            <div className="box-layout">
                <div className="form">
                    <div className="box-layout__box form__fieldset-container">
                        <span className="form__fieldset-title">Name</span>
                        <div className="form__fieldset form__fieldset--alt">
                            <label htmlFor="divisionName">Division</label>
                            <select id="divisionName" onChange={(e) => this.setState({ team: { ...this.state.team, divisionName: e.target.value }})} value={this.state.team.divisionName}>
                                <option>Wisconsin Rapids</option>
                                <option>Marshfield</option>
                                <option>Neillsville</option>
                            </select>
                        </div>
                        <div className="form__fieldset">
                            <input type="text" placeholder="Team Name" onChange={(e) => this.setState({ team: { ...this.state.team, teamName: e.target.value } })} value={this.state.team.teamName} />
                            <input type="text" placeholder="Home Location" onChange={(e) => this.setState({ team: { ...this.state.team, homeLocation: e.target.value } })} value={this.state.team.homeLocation} />
                            <input type="text" placeholder="Day of Play" onChange={(e) => this.setState({ team: { ...this.state.team, dayOfPlay: e.target.value } })} value={this.state.team.dayOfPlay} />
                            <input type="text" placeholder="Existing Team" onChange={(e) => this.setState({ team: { ...this.state.team, existingTeam: e.target.value } })} value={this.state.team.existingTeam} />
                            <input type="text" placeholder="Use Current Roster" onChange={(e) => this.setState({ team: { ...this.state.team, useCurrentRoster: e.target.value } })} value={this.state.team.useCurrentRoster} />
                        </div>
                    </div>

                    <div className="box-layout__box form__fieldset-container">
                        <span className="form__fieldset-title">Players</span>
                        <div className="form__fieldset">
                            {this.state.playerFormItems}
                        </div>
                    </div>

                    <div className="box-layout__box">
                        <input type="button" className="button" value="Submit" onClick={this.onSubmit} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamForm;