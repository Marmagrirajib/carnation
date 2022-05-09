import React from 'react';
import { Link } from 'react-router-dom';
import not from '../../../Images/404.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container text-center'>
            <img className='img-fluid home-page' src={not} alt="" />
            <div><Link to='/'>
                <button className='btn buttons mt-2'>Home Page</button></Link></div>

        </div>
    );
};

export default NotFound;