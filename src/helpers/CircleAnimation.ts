import gsap from 'gsap';

type Point = { x: number; y: number };

export function calculateRotationAngle(point: Point): number {
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

export function rotation(angle: number) {
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
