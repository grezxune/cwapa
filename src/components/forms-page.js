import React from 'react';
import { Link } from 'react-router-dom';

const FormsPage = (prop) => (
    <div className="content-container content-container--page">
        <Link to="/player/add">New Player</Link>
    </div>
);

export default FormsPage;