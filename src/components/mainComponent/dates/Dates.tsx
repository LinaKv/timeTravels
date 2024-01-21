import React from 'react';
import './dates.scss';

import Scrumble from '../../../helpers/Scrumble';

type Props = {
    dates: string;
};

function Dates({ dates }: Props) {
    const datesArr = dates.split('-');

    return (
        <div className="datesWrapper">
            <Scrumble text={datesArr[0]} className="firstYear" />
            <Scrumble text={datesArr[1]} className="secondYear" />
        </div>
    );
}

export default Dates;
