import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='container text-center mt-5 w-100'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;