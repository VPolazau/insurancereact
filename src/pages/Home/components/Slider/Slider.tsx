import React, { useState, useRef, MouseEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { Typography, Button } from '../../../../components';
import { Slides } from '../../../../utils/constants';
import { decodeHtmlEntities } from '../../../../utils/utilities';

import styles from './styles.module.css';

export interface SliderProps {
    slides: Slides[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [dragStartX, setDragStartX] = useState<number>(0);
    const [dragDistance, setDragDistance] = useState<number>(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const slideWidth = 100 / slides.length;
    const dragThreshold = 100; // Пороговое значение для определения переключения слайда
    const navigate = useNavigate();

    const handlePaginationClick = (index: number) => {
        setActiveSlide(index);
    };

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setDragStartX(e.clientX);
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const slider = sliderRef.current;
        if (slider) {
            const newDragDistance = e.clientX - dragStartX;
            setDragDistance(newDragDistance);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);

        if (Math.abs(dragDistance) > dragThreshold) {
            if (dragDistance > 0 && activeSlide > 0) {
                setActiveSlide(activeSlide - 1);
            } else if (dragDistance < 0 && activeSlide < slides.length - 1) {
                setActiveSlide(activeSlide + 1);
            }
        }

        setDragDistance(0);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setDragDistance(0);
    };

    // TODO
    const handleApply = () => {
        navigate('/in-progress');
    };

    useEffect(() => {
        // Автоматическое переключение слайда каждые 10 секунд
        const timer = setTimeout(() => {
            const nextSlide = (activeSlide + 1) % slides.length;
            setActiveSlide(nextSlide);
        }, 10000);

        return () => {
            clearTimeout(timer);
        };
    }, [activeSlide, slides.length]);

    return (
        <div
            data-testid="Slider"
            className={styles.slider}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            ref={sliderRef}
        >
            <div
                className={styles.sliderWrapper}
                style={{
                    width: `${slides.length * 100}%`,
                    transform: `translateX(calc(-${activeSlide * slideWidth}% + ${dragDistance}px))`,
                }}
            >
                {slides.map((slide, index) => (
                    <div className={styles.slide} key={index}>
                        <div className={styles.slideContainer}>
                            <div className={styles.slideContent}>
                                <Typography variant="h1" className={styles.slideTitle} data-testid="sliderTitle">
                                    {decodeHtmlEntities(slide.title)}
                                </Typography>
                                <Typography variant="h3" className={styles.slideSubtitle} data-testid="sliderSubtitle">
                                    {decodeHtmlEntities(slide.subtitle)}
                                </Typography>
                                <Button variant="primary" onClick={handleApply} className={styles.buttonDesign}>
                                    Оформить
                                </Button>
                            </div>
                            <div className={styles.slideImage}>
                                <img src={slide.image} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                {slides.map((_, index) => (
                    <button
                        data-testid="sliderButton"
                        key={index}
                        className={cn(styles.paginationDot, { [styles.active]: index === activeSlide })}
                        onClick={() => handlePaginationClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};
