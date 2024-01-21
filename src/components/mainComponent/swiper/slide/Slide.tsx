import React from 'react';
import './slide.scss';

type Props = {
    year: string;
    text: string;
    isActive: Boolean;
};

function Slide({ year, text, isActive }: Props) {
    return (
        <div className={`slideWrapper ${isActive ? '' : 'sliderIsNext'}`}>
            <div className="dateInSlider">{year}</div>
            <div className="textInSlider">{text}</div>
        </div>
    );
}

export default Slide;
