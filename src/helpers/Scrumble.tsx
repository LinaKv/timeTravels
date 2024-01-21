import React from 'react';
import { useState, useEffect } from 'react';

type Props = {
    text: string;
    className: string;
};

function Scrumble({ text, className }: Props) {
    const shuffle = (word: string) => {
        return word
            .split('')
            .sort(() => {
                return 0.5 - Math.random();
            })
            .join('');
    };

    const gen = () => {
        let textArray = [];
        if (text) {
            //variations with change in size
            for (let i = text.length; i >= 0; i--) {
                let tmp = shuffle(text);
                tmp = tmp.slice(0, text.length - i);
                textArray.push(tmp);
            }
            //variations without change in size
            for (let i = 0; i < 6; i++) {
                textArray.push(shuffle(text));
            }
            //normal text
            textArray.push(text);
        }
        return textArray;
    };

    const [textArray, setTextArray] = useState(gen);

    const [activeText, setActiveText] = useState(0);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        setTextArray(gen);
        if (activeText == textArray.length - 1) {
            setActiveText(0);
        }
        setPlay(true);
    }, [text]);

    useEffect(() => {
        let interval: any;
        if (play && activeText < textArray.length - 1) {
            interval = setInterval(() => {
                setActiveText(activeText + 1);
            }, 90);
        }
        return () => clearInterval(interval);
    }, [play, activeText]);

    return <div className={className}>{textArray[activeText]}</div>;
}

export default Scrumble;
