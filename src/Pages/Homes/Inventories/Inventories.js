import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://desolate-citadel-25650.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])



    return (
        <div className='container'>
            <h2 className='text-center mt-5 title'>Inventory Items</h2>
            <div className='line m-auto'></div>
            <div className="row">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}

                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;