import React from 'react';
import './lines.scss';
import useMediaQuery from '../../hooks/useMediaQuery';

function Lines() {
    const showLines = useMediaQuery('(min-width: 1920px)');
    if (!showLines) return null;
    return (
        <>
            <div className="verticalLine verticalLine-left" />
            <div className="verticalLine verticalLine-center" />
            <div className="verticalLine verticalLine-right" />
            <div className="horizontalLineCenter" />
        </>
    );
}

export default Lines;
