import React from 'react';
import not from '../../../Images/404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container text-center'>
            <img className='img-fluid home-page' src={not} alt="" />
            <div><button className='btn button mt-2'>Go to Home Page</button></div>

        </div>
    );
};

export default NotFound;