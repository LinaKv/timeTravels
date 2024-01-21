import React from 'react';

function Gradient() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="120" viewBox="0 0 6 120" fill="none">
            <path d="M3 0L2.99999 120" stroke="url(#paint0_linear_64_37)" strokeWidth="5" />
            <defs>
                <linearGradient
                    id="paint0_linear_64_37"
                    x1="3.5"
                    y1="-6"
                    x2="3.49999"
                    y2="102"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3877EE" />
                    <stop offset="1" stopColor="#EF5DA8" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default Gradient;
