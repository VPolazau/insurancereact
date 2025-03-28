import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';

import { decodeHtmlEntities } from '../../../../utils/utilities';

import { SLIDES } from '../../../../utils/constants';

import { Slider } from './Slider';

afterEach(cleanup);

describe('Slider', () => {
    it('slider 1v', () => {
        render(
            <MemoryRouter>
                <Slider slides={SLIDES} />
            </MemoryRouter>
        );

        const titles = screen.getAllByTestId('sliderTitle');
        const subtitles = screen.getAllByTestId('sliderSubtitle');
        const button = screen.getAllByTestId('sliderButton');

        const mokText = {
            title0: decodeHtmlEntities(SLIDES[0].title),
            subtitle0: decodeHtmlEntities(SLIDES[0].subtitle),
            title1: decodeHtmlEntities(SLIDES[1].title),
            subtitle1: decodeHtmlEntities(SLIDES[1].subtitle),
        };

        expect(screen.getByTestId('Slider')).toBeInTheDocument();
        expect(titles[0].textContent).toBe(mokText.title0);
        expect(subtitles[0].textContent).toBe(mokText.subtitle0);

        expect(titles[1].textContent).toBe(mokText.title1);
        expect(subtitles[1].textContent).toBe(mokText.subtitle1);

        expect(button[0].classList.contains('active')).toBe(true);
        expect(button[1].classList.contains('active')).toBe(false);
        fireEvent.click(button[1]);
        expect(button[0].classList.contains('active')).toBe(false);
        expect(button[1].classList.contains('active')).toBe(true);
        fireEvent.click(button[0]);
        expect(button[0].classList.contains('active')).toBe(true);
        expect(button[1].classList.contains('active')).toBe(false);

        expect(screen.getByTestId('Slider')).toMatchSnapshot();
    });
});
