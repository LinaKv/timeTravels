import React from 'react';
import './mainComponent.scss';
import Dates from './dates/Dates';
import Slider from './swiper/Swiper';
import { timeEvents } from '../../shared/data';
import { useState } from 'react';

import Circle from '../circle/Circle';
import Line from '../../elements/Line';
import Navigation from './navigation/Navigation';
import useMediaQuery from '../../hooks/useMediaQuery';

function MainComponent() {
    const [event, setEvent] = useState(timeEvents[0]);
    const isDesktop = useMediaQuery('(min-width: 1440px)');

    function onClickPrev() {
        if (timeEvents.indexOf(event)) {
            setEvent((prevEvent) => timeEvents[timeEvents.indexOf(prevEvent) - 1]);
        }
    }

    function onClickNext() {
        if (timeEvents.indexOf(event) + 1 !== timeEvents.length) {
            setEvent((prevEvent) => timeEvents[timeEvents.indexOf(prevEvent) + 1]);
        }
    }

    function onClickToChangeEvent(id: string) {
        setEvent(timeEvents.find((el) => el.id === id) || timeEvents[0]);
    }

    return (
        <div className="mainComponentWrapper">
            {isDesktop && <Circle eventId={event.id} onClickCircle={onClickToChangeEvent} area={event.Area} />}
            <Dates dates={event.Dates} />
            <div className="mobileWrapper">
                <div className="settingsWrapper">
                    <Navigation
                        event={event}
                        onClickPrev={onClickPrev}
                        onClickNext={onClickNext}
                        onClickEvent={onClickToChangeEvent}
                    />
                </div>
                <Slider events={event.Events} id={event.id} isDesktop={isDesktop} />
                <Line className="lineWrapper" />
            </div>
        </div>
    );
}

export default MainComponent;
