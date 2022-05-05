import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const CarouselLucidi = () => {
  return (
    <>
    <Carousel>
        <Carousel.Item>
            <img
            className="fotoWhaikau"
            src="../img/lucidiDos.png"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="fotoWhaikau"
            src="../img/lucidiTres.png"
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="fotoWhaikau"
            src='../img/lucidiCuatro.png'
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CarouselLucidi