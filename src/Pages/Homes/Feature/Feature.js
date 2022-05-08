import React from 'react';
import './Feature.css';
import main from '../../../Images/main.png';

const Feature = () => {
    return (
        <div className='container text-center'>
            <h2 className='title mt-5'>Exclusive Car Featured</h2>
            <div className='line m-auto'></div>

            <div className="row mt-5">
                <div className="col-lg-4">
                    <div className="info-text">
                        <h5 className='detail mt-5'>SUPER FAST CAR
                        </h5>
                        <p className='detail-p'>Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod tempor used.

                        </p>
                    </div>

                    <div className="info-text">
                        <h5 className='detail mt-5'>DEALERSHIP POINTS

                        </h5>
                        <p className='detail-p'>Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod tempor used.

                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img className='img-fluid' src={main} alt="" />
                </div>

                <div className="col-lg-4">
                    <div className="info-text">
                        <h5 className='detail2 mt-5'>SUPER FAST CAR
                        </h5>
                        <p className='detail-2'>Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod tempor used.

                        </p>
                    </div>

                    <div className="info-text">
                        <h5 className='detail2 mt-5'>DEALERSHIP POINTS

                        </h5>
                        <p className='detail-2'>Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod tempor used.

                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feature;