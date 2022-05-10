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
        <div className='container mt-5'>

            <div className="row">
                <div className="col-lg-6">
                    <img className='img-fluid' src={inventories.image} alt="" />
                </div>
                <div className="col-lg-6">
                    <h2>{inventories.name}</h2>
                    <h5>Supplier: {inventories.supplier}</h5>
                    <h5>Price: {inventories.price}</h5>
                    <h5>Quantity: {inventories.quantity}</h5>
                    <p>{inventories.description}</p>
                    <button className='btn btn-danger'>Delivert</button> <button className='btn btn-success'>Add Item</button>
                </div>
            </div>



        </div>
    );
};

export default ItemDetails;