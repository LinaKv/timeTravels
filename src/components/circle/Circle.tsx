import React, { useEffect, useRef, useState } from 'react';
import './circle.scss';
import { timeEvents } from '../../shared/data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

type Props = {
    eventId: string;
    onClickCircle: (id: string) => void;
    area: string;
};

type Point = { x: number; y: number };

function calculateRotationAngle(point: Point): number {
    const centerX = 1000;
    const centerY = 486;
    const targetX = 1232;
    const targetY = 305;

    const currentAngleInRadians = Math.atan2(point.y - centerY, point.x - centerX);

    const currentAngleInDegrees = (currentAngleInRadians * 180) / Math.PI;

    const rotationAngleInDegrees =
        Math.atan2(targetY - centerY, targetX - centerX) * (180 / Math.PI) - currentAngleInDegrees;

    return rotationAngleInDegrees;
}

function rotation(angle: number) {
    gsap.to('.point', {
        duration: 2,
        x: 1,
        rotation: -angle,
        onComplete: () => {
            gsap.to('.point', {
                duration: 2,
                x: 1,
            });
        },
    });

    gsap.to('.point-container', {
        duration: 2,
        x: 1,
        rotation: angle,
        immediateRender: true,

        onStart: () => {},
        onComplete: () => {
            gsap.to('.point-container', {
                duration: 2,
                x: 1,
            });
        },
    });
}

function Circle({ eventId, onClickCircle, area }: Props) {
    const [ang, setAng] = useState(0);

    const pointsRef = useRef<any[]>([]);

    useEffect(() => {
        pointsRef.current = pointsRef.current.slice(0, timeEvents.length);
    }, [timeEvents]);

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
                        onClick={(e) => onClickCircle(time.id)}
                        key={time.id}
                        ref={(el) => (pointsRef.current[index] = el)}
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
