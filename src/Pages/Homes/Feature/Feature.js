import React from 'react';
import './Feature.css';
import main from '../../../Images/main.png';
import icon1 from '../../../Images/icon1.png'
import icon2 from '../../../Images/icon2.png'
import icon3 from '../../../Images/icon3.png'
import icon4 from '../../../Images/icon4.png'

const Feature = () => {
    return (
        <div className='container text-center'>
            <h2 className='title mt-5'>Exclusive Car Featured</h2>
            <div className='line m-auto'></div>

            <div className="row mt-5">
                <div className="col-lg-4">
                    <div className="info-text">
                        <img className='img-fluid icons' src={icon1} alt="" />
                        <h5 className='detail mt-3'>SUPER FAST CAR
                        </h5>
                        <p className='detail-p'>Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod tempor used.

                        </p>
                    </div>

                    <div className="info-text">
                        <img className='img-fluid icons' src={icon2} alt="" />
                        <h5 className='detail mt-3'>DEALERSHIP POINTS

                        </h5>
                        <p className='detail-p'>Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod tempor used.

                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img className='img-fluid' src={main} alt="" />
                </div>

                <div className="col-lg-4">
                    <div className="info-text2">
                        <img className='img-fluid icons' src={icon3} alt="" />
                        <h5 className='detail2 mt-3'>SUPER SERVICE
                        </h5>
                        <p className='detail-2'>Placlder text commonly used detrate theyjlos visual form amet, consectetur ading elitmod tempor used.

                        </p>
                    </div>

                    <div className="info-text2">
                        <img className='img-fluid icons' src={icon4} alt="" />
                        <h5 className='detail2 mt-3'>LOAN FACILITIES

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