import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const CarouselWhaikau = () => {
  return (
    <>
    <Carousel>
        <Carousel.Item>
            <img
            className="fotoWhaikau"
            src="../img/whaikauUno.jpg"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="fotoWhaikau"
            src="../img/whaikauDos.jpg"
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="fotoWhaikau"
            src="../img/whaikauTres.jpg"
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="fotoWhaikau"
            src='../img/whaikauCuatro.jpg'
            alt="Fourth slide"
            />
        </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CarouselWhaikau