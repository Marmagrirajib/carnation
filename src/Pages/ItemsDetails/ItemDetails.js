import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { InventoryId } = useParams();
    return (
        <div>
            <h2 className='text-center mt-5'>Welcome to Inventory Details :{InventoryId}</h2>
        </div>
    );
};

export default ItemDetails;