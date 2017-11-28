import React from 'react';
import customAxios from '../../network/axios';
import PlayerListItem from './player-list-item';

class PlayersListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        this.getPlayers().then((players = []) => {
            this.setState({ players })
        });
    }

    getPlayers = async () => {
        try {
            const playersResponse = await customAxios.get('/players');

            console.log('Got players!\n', playersResponse.data.players);
            if (playersResponse && playersResponse.status === 200) {
                return playersResponse.data.players.map((player) => {
                    return <PlayerListItem player={player} key={player._id} />
                });
            }
        } catch (err) {
            console.log('Error getting players!\n', err);
        }
    };
    
    render() {
        return (
            <div className="content-container content-container--page">
                Players Page!
                {this.state.players}
            </div>
        );
    }
}

export default PlayersListPage;