import React from 'react';
import './Popular.css';
import banners from '../../../Images/banner-last.jpg'
import com1 from '../../../Images/popular_brand01.jpg'
import com2 from '../../../Images/popular_brand02.jpg'
import com3 from '../../../Images/popular_brand03.jpg'
import com4 from '../../../Images/popular_brand04.jpg'
import com5 from '../../../Images/popular_brand05.jpg'
import com6 from '../../../Images/popular_brand06.jpg'
import com7 from '../../../Images/popular_brand07.jpg'
import com8 from '../../../Images/popular_brand08.jpg'

const Popular = () => {
    return (
        <div className='container popular'>

            <div className="row d-flex align-items-center">
                <div className="col-lg-8">

                    <div className="p-details">
                        <h5 className='title mb-4'>POPULAR SELLING ITEMS</h5>
                        <div className="row mb-5">
                            <div className="col-lg-3">
                                <img src={com1} alt="" />
                            </div>
                            <div className="col-lg-3">
                                <img src={com2} alt="" />
                            </div>
                            <div className="col-lg-3">
                                <img src={com3} alt="" />
                            </div>
                            <div className="col-lg-3">
                                <img src={com4} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <img src={com5} alt="" />
                            </div>
                            <div className="col-lg-3">
                                <img src={com6} alt="" />
                            </div>
                            <div className="col-lg-3">
                                <img src={com7} alt="" />
                            </div>
                            <div className="col-lg-3">
                                <img src={com8} alt="" />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-lg-4">
                    <img className='img-fluid' src={banners} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Popular;