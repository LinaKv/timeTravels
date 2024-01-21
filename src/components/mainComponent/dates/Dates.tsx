import React from 'react';
import './dates.scss';

import Scrumble from '../../../helpers/Scrumble';

type DateProps = {
    dates: string;
};

function Dates({ dates }: DateProps) {
    const datesArr = dates.split('-');

    return (
        <div className="datesWrapper">
            <Scrumble text={datesArr[0]} className="firstYear" />
            <Scrumble text={datesArr[1]} className="secondYear" />
        </div>
    );
}

export default Dates;
