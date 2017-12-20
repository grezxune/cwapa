import React from 'react';
import { Link } from 'react-router-dom';

const FormsPage = (prop) => (
    <div className="box-layout">
        <div className="box-layout__box vertical-container vertical-container--centered">
            <span className="subtitle">Submittable Forms</span>
            <Link to="/player/add" className="link-button">New Player</Link>
        </div>
    </div>
);

export default FormsPage;