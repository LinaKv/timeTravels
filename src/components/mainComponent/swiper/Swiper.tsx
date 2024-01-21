import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import './swiper.scss';
import Slide from './slide/Slide';
import { TimeEvent } from '../../../shared/type';

import { useState, useCallback } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import PrevState from '../../../elements/PrevState';
import NextState from '../../../elements/NextState';

type SliderProps = {
    id: string;
    events: TimeEvent[];
    isDesktop: boolean;
};

function Slider({ events, id, isDesktop }: SliderProps) {
    const [swiperRef, setSwiperRef] = useState<any>();
    const [isEnd, setIsEnd] = useState(false);
    const [isStart, setIsStart] = useState(true);
    const eventsLength = events.length;

    const handlePrevious = useCallback(() => {
        swiperRef?.slidePrev();
    }, [swiperRef]);

    const handleNext = useCallback(() => {
        swiperRef?.slideNext();
    }, [swiperRef]);

    const onInit = () => {
        setIsEnd(false);
        setIsStart(true);
    };

    const onReachEnd = () => {
        setIsEnd(true);
    };

    const onReachBeginning = () => {
        setIsStart(true);
    };

    const onProgress = (_: any, progress: number) => {
        if (progress > 0) {
            setIsStart(false);
        }

        if (progress < 1) {
            setIsEnd(false);
        }
    };

    const isPrevState = isDesktop && !isStart && eventsLength > 3;
    const isNextState = isDesktop && !isEnd && eventsLength > 3;

    return (
        <div className="swiperWrapper">
            <SwitchTransition>
                <CSSTransition in appear key={id} timeout={500} classNames="switch-transition" unmountOnExit>
                    <>
                        <Swiper
                            className="swiper"
                            onSwiper={setSwiperRef}
                            modules={[Navigation, Scrollbar]}
                            spaceBetween={isDesktop ? 80 : 25}
                            slidesPerView={isDesktop ? 3 : 2}
                            onInit={onInit}
                            onReachEnd={onReachEnd}
                            onReachBeginning={onReachBeginning}
                            onProgress={onProgress}
                        >
                            {events.map((item) => (
                                <SwiperSlide key={item.id}>
                                    {({ isActive }) => <Slide text={item.event} year={item.date} isActive={isActive} />}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {isPrevState && <PrevState onClick={handlePrevious} className="prevButton" />}
                        {isNextState && <NextState onClick={handleNext} className="nextButton" />}
                    </>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}

export default Slider;
