import React, { useState, useEffect } from 'react';
import Players from '../Players/Players';
import './Home.css';
import { MdSportsScore } from 'react-icons/md'
import Cart from '../Cart/Cart';



const Home = () => {


    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            // fetch('../../../public/data.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);
    console.log(players);


    return (
        <div className='home-container'>
            <div className='players-content'>
                <h3 className='logo'><MdSportsScore className='logo-icon' />Club Academy</h3>
                <h4>Select today's exercise</h4>
                <Players players={players}></Players>
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;