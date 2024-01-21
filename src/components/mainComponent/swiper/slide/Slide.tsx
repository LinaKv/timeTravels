import React from 'react';
import './slide.scss';

type SlideProps = {
    year: string;
    text: string;
    isActive: Boolean;
};

function Slide({ year, text, isActive }: SlideProps) {
    const nextSlider = !isActive && 'sliderIsNext';
    return (
        <div className={`slideWrapper ${nextSlider}`}>
            <div className="dateInSlider">{year}</div>
            <div className="textInSlider">{text}</div>
        </div>
    );
}

export default Slide;
