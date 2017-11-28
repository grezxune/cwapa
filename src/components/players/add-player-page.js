import React from 'react';
import PlayerForm from './player-form';
import customAxios from '../../network/axios';
import { history } from '../../routers/app-router';

class AddPlayerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    addPlayer = async (playerForm) => {
        try {
            const submitResponse = await customAxios.post('/player', playerForm.player);

            console.log('State sent to post:\n', playerForm.player);
            console.log('Player Post Response:\n', submitResponse);
            if (submitResponse && submitResponse.status === 200) {
                history.push('/');
                console.log('Success submitting player!!');
            } else {
                console.log('Error submitting player');
            }
        } catch (err) {
            console.log('Error submitting player\n', err);
        }
    };

    render() {
        return (
            <div>
                <PlayerForm onSubmit={this.addPlayer} />
            </div>
        );
    }
}

export default AddPlayerPage;