import React from 'react';
import PlayerForm from './player-form';
import customAxios from '../../network/axios';
import { history } from '../../routers/app-router';

class AddPlayerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    addPlayer = async (player) => {
        let submitResponse;
        try {
            submitResponse = await customAxios.post('/player', player);

            if (submitResponse && submitResponse.status === 200) {
                history.push('/');
            }
        } catch (err) {
        }

        return submitResponse;
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