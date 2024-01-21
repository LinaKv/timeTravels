import React, { useEffect, useRef, useState } from 'react';
import './circle.scss';
import { timeEvents } from '../../shared/data';
import { useGSAP } from '@gsap/react';
import { calculateRotationAngle, rotation } from '../../helpers/CircleAnimation';

type CircleProps = {
    eventId: string;
    onClickCircle: (id: string) => void;
    area: string;
};

function Circle({ eventId, onClickCircle, area }: CircleProps) {
    const [ang, setAng] = useState(0);

    const pointsRef = useRef<any[]>([]);

    useEffect(() => {
        pointsRef.current = pointsRef.current.slice(0, timeEvents.length);
    }, []);

    useEffect(() => {
        rotation(ang);
    }, [ang]);

    useGSAP(
        () => {
            const eIndex = timeEvents.findIndex((event) => event.id === eventId);
            const { x, y } = pointsRef.current?.[eIndex].getBoundingClientRect();
            const newAngle = ang + calculateRotationAngle({ x, y });
            setAng(newAngle);
        },
        { dependencies: [eventId] },
    );

    return (
        <div>
            <div className="circle" />
            <div className="point-container">
                {timeEvents.map((time, index) => (
                    <div
                        className={`point point-${index + 1} point${time.id === eventId ? '-active' : '-disabled'}`}
                        key={time.id}
                        ref={(el) => (pointsRef.current[index] = el)}
                        onClick={(e) => onClickCircle(time.id)}
                    >
                        <div className="number">{index + 1}</div>
                        <div className="area">{area}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Circle;
