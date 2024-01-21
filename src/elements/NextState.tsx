import React from 'react';

type Props = {
    className?: string;
    onClick?: () => void;
};

function NextState({ className, onClick }: Props) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            onClick={onClick}
        >
            <circle cx="25" cy="25" r="24.5" stroke="#42567A" strokeOpacity="0.5" className={`${className}-circle`} />
            <path
                d="M22.5 18.75L28.75 25L22.5 31.25"
                stroke="#42567A"
                strokeWidth="2"
                className={`${className}-path`}
            />
        </svg>
    );
}

export default NextState;
