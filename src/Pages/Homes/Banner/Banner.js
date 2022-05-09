import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner3.jpg';
import banner2 from '../../../Images/banner2.jpg';
import banner3 from '../../../Images/banner4.jpg';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>CHEVROLET</h3>
                    <p>Chevrolet, or Chevy for short, is a division of General Motors. It is one of the most popular GM marques.</p>
                    <button className='btn buttons'>More Info</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>AUDI</h3>
                    <p>August Horch founded his first automobile company, August Horch & Cie, in Cologne in 1899.</p>
                    <button className='btn buttons'>More Info</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>BMW</h3>
                    <p>BMW entered the automobile business in 1928. The company's R32 motorcycle set a world speed record that was not broken until 1937.</p>
                    <button className='btn buttons'>More Info</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;