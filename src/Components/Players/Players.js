import React, { useEffect, useState } from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css';


const Players = ({players}) => {


    return (
        <div className='player-container'>
            {
                players.map(player => <SinglePlayer player={player}></SinglePlayer>)
            }
        </div>
    );
};

export default Players;