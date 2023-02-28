import React, { useState } from 'react';
import './Cart.css'

const Cart = () => {
    const [breaktime, SetBreaktime] = useState("")
    console.log(breaktime);
    
  const handleBreak = () =>{
    console.log('hi');
  }

    return (
        <div>
            <div className='user-profile'>
                <div>
                    <img src="../../../public/image/male.png" alt="" />
                </div>
                <div>
                    <h3>Humaira Akila Nishat</h3>
                    <p>Sydney, Australia</p>
                </div>
            </div>

            <div className='user-info'>
                <div>
                    <h4>75kg</h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>6.5</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>25 yrs</h4>
                    <p>Age</p>
                </div>
            </div>

            <div className='user-break'>
                <h3>Add A Break</h3>
                <div className='user-time'>
                    <button onClick={handleBreak} className='time'>10s</button>
                    <button className='time'>20s</button>
                    <button className='time'>30s</button>
                    <button className='time'>40s</button>
                    <button className='time'>50s</button>
                </div>
            </div>

            <div className='exercise-details'>
                <h3>Exercise Details</h3>
                <div className='exercise-field'>
                    <h4>Exercise time</h4>
                    <p>200 seconds</p>
                </div>
                <div className='exercise-field'>
                    <h4>Break time</h4>
                    <p>15 seconds</p>
                </div>
            </div>


            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default Cart;