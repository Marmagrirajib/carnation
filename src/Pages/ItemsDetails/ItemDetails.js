import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { InventoryId } = useParams();
    return (
        <div className='container mt-5 text-center'>
            <h4>Do you want to update any Inventory? If yes please login first. </h4>
            <Link to='/update'><button className='btn btn-info mt-3'>Update Now</button></Link>
        </div>
    );
};

export default ItemDetails;