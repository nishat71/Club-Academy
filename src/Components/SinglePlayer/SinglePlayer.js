import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({ player }) => {
    const { flags, name, area } = player;

    return (
        <div className='single-player-card'>
            <img className='player-img' src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <p>Time required:</p>
            <p>Area: {area}</p>
            <button className='addlist-btn'>Add to list</button>
        </div>
    );
};

export default SinglePlayer;