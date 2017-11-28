import React from 'react';
import customAxios from '../../network/axios';
import PlayerForm from './player-form';
import { history } from '../../routers/app-router';

class EditPlayerPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player: {}
        };
    }

    updatePlayer = async (playerForm) => {
        try {
            const submitResponse = await customAxios.patch(`/player/${this.props.match.params.id}`, playerForm.player);

            console.log('State sent to post:\n', playerForm.player);
            console.log('Player Post Response:\n', submitResponse);
            if (submitResponse && submitResponse.status === 200) {
                history.push('/players');
                console.log('Success submitting player!!');
            } else {
                console.log('Error submitting player');
            }
        } catch (err) {
            console.log('Error submitting player\n', err);
        }
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
            this.setState({ player: response.data.player });
        }).catch((err) => console.log('Error getting player\n', err));
    }

    render() {
        return (
            <div>
                <PlayerForm player={this.state.player} onSubmit={this.updatePlayer} onRemove={this.removePlayer} />
            </div>
        );
    }
}

export default EditPlayerPage;