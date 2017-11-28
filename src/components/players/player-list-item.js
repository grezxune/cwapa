import React from 'react';
import { Link } from 'react-router-dom';

const PlayerListItem = (props) => (
    <div className="content-container">
        <Link to={`/player/${props.player._id}`}>
            <div className="player-list-item__container">
                <div className="player-list-item__name">
                    <span>{props.player.name.first} {props.player.name.last} ({props.player.name.nickname})</span>
                </div>
            </div>
        </Link>
    </div>
);

export default PlayerListItem;