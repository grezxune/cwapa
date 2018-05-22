import React from 'react';
import injectSheet from 'react-jss';

import PlayerForm from './player-form';
import customAxios from '../../network/axios';
import { history } from '../../routers/app-router';

class AddPlayerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    addPlayer = async player => {
        let submitResponse;
        try {
            submitResponse = await customAxios.post('/player', player);

            if (submitResponse && submitResponse.status === 200) {
                history.push('/');
            }
        } catch (err) {
            if (err.response.data && err.response.data.errors) {
                return { errors: err.response.data.errors };
            }
        }

        return submitResponse;
    };

    render() {
        return (
            <div className={`${this.props.classes.page} vertical-container`}>
                <PlayerForm onSubmit={this.addPlayer} />
            </div>
        );
    }
}

const styles = theme => ({
    page: {
        gridArea: 'content'
    }
});

const styledComponent = injectSheet(styles)(AddPlayerPage);

export { styledComponent as default, AddPlayerPage };
