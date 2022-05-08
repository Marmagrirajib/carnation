import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventories.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])



    return (
        <div className='container'>
            <h2 className='text-center mt-5'>Inventory Items</h2>
            <div className="row">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}

                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;