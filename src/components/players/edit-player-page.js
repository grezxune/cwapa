import React from 'react';
import customAxios from '../../network/axios';
import PlayerForm from './player-form';
import { history } from '../../routers/app-router';
import LoadingPage from '../loading-page';

class EditPlayerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedPlayer: false,
            player: {}
        };
    }

    updatePlayer = async (player) => {
        let submitResponse;
        try {
            submitResponse = await customAxios.patch(`/player/${this.props.match.params.id}`, player);

            if (submitResponse && submitResponse.status === 200) {
                history.push('/players');
            }
        } catch (err) {
        }

        return submitResponse;
    };

    removePlayer = async () => {
        try {
            const submitResponse = await customAxios.delete(`/player/${this.props.match.params.id}`);

            if (submitResponse && submitResponse.status === 200) {
                history.push('/players');
                console.log('Success removing player!!');
            } else {
                console.log('Error removing player');
            }
        } catch (err) {
            console.log('Error removing player\n', err);
        }
    };

    componentDidMount() {
        customAxios.get(`/player/${this.props.match.params.id}`).then((response) => {
            this.setState({ loadedPlayer: true, player: response.data.player });
        }).catch((err) => console.log('Error getting player\n', err));
    }

    render() {
        return (
            <div>
                { this.state.loadedPlayer ? <PlayerForm player={this.state.player} onSubmit={this.updatePlayer} onRemove={this.removePlayer} /> : <LoadingPage /> }
            </div>
        );
    }
}

export default EditPlayerPage;