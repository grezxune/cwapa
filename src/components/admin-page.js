import React from 'react';
import { Link } from 'react-router-dom';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-container content-container--page">
                <Link to="/players">Players</Link>
                <Link to="/teams">Teams</Link>
            </div>
        );
    }
}

export default AdminPage;