import React from 'react';
import { Link } from 'react-router-dom';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="vertical-container vertical-container--centered">
                <div className="box-layout__box box-layout__box--centered vertical-container vertical-container--centered">
                    <span className="subtitle">User Submitted Data</span>
                    <Link className="link-button" to="/players">Players</Link>
                    <Link className="link-button" to="/teams">Teams</Link>
                </div>

                <div className="box-layout__box box-layout__box--centered vertical-container vertical-container--centered">
                    <span className="subtitle">Forms For Admin</span>
                    <Link className="link-button" to="/news-item/add">Add News Item</Link>
                    <Link className="link-button" to="/news-item/add">Add Event</Link>
                    <Link className="link-button" to="/users/add">Add User</Link>
                </div>
            </div>
        );
    }
}

export default AdminPage;