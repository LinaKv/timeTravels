import React from 'react';
import PrevState from '../../../elements/PrevState';
import NextState from '../../../elements/NextState';
import { TimeInterface } from '../../../shared/type';
import { timeEvents } from '../../../shared/data';
import './navigation.scss';

type Props = {
    event: TimeInterface;
    onClickPrev: () => void;
    onClickNext: () => void;
    onClickEvent: (id: string) => void;
};

function Navigation({ event, onClickPrev, onClickNext, onClickEvent }: Props) {
    const eventsNumbers = timeEvents.length;
    const currentEvent = timeEvents.indexOf(event);

    const trackingString = `0${currentEvent + 1}/0${eventsNumbers}`;
    const prevStateCondition = currentEvent ? '' : 'disabled';
    const nextStateCondition = currentEvent + 1 === eventsNumbers ? 'disabled' : '';

    return (
        <>
            <div className="tracking">{trackingString}</div>
            <div className="settings">
                <PrevState className={`prevState ${prevStateCondition}`} onClick={() => onClickPrev()} />
                <NextState className={`nextState ${nextStateCondition}`} onClick={() => onClickNext()} />

                <div className="bulletsWrapper">
                    {timeEvents.map((el) => (
                        <div
                            className={`bullet ${event.id === el.id ? 'active' : ''}`}
                            onClick={() => onClickEvent(el.id)}
                            key={`bullet${el.id}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Navigation;
