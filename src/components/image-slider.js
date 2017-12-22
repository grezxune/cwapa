import React from 'react';
import Slider from 'react-slick';

const ImageSlider = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        arrows: false
    };

    const images = props.images.map((image) => {
        return <img className="uploaded-image" src={image.imageBase64} key={image.name} alt={image.name} />;
    });

    return (
        <Slider {...settings}
                className="image-slider">
            {images}
        </Slider>
    );
};

export default ImageSlider;