import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import Update from '../Update/Update';

const ItemDetails = () => {

    const { InventoryId } = useParams();

    const [inventories, setInventories] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${InventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])




    return (
        <div className='container mt-5 text-center'>

            <img src={inventories.image} alt="" />



        </div>
    );
};

export default ItemDetails;