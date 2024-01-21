import React from 'react';

type Props = {
    className: string;
};

function Line({ className }: Props) {
    return (
        <div className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" width="280" height="2" viewBox="0 0 280 2" fill="none">
                <path d="M0 1H280" stroke="#C7CDD9" />
            </svg>
        </div>
    );
}

export default Line;
