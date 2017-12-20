import React from 'react';
import { Link } from 'react-router-dom';

const PlayerListItem = (props) => (
    <Link className="link-button" to={`/player/${props.player._id}`}>
        <span>{props.player.name.first} {props.player.name.last} {props.player.name.nickname && '(' + props.player.name.nickname + ')'}</span>
    </Link>
);

export default PlayerListItem;