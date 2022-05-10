import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { id, name, image, price, quantity, supplier, description } = inventory;
    const navigate = useNavigate()
    const manageItems = id => {
        navigate(`/inventory/${id}`)

    }
    return (
        <div className=' g-5 col-sm-12 col-md-6 col-lg-4 mb-5'>

            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-title">Supplier: {supplier}</p>
                    <p className="card-title">Price: {price}</p>
                    <p className="card-title">Availabe Product: {quantity}</p>
                    <p className="card-text">{description}</p>

                    <button onClick={() => manageItems(id)} className="btn button">Update</button>
                </div>
            </div>

        </div>

    );
};

export default Inventory;