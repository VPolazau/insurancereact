import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { DropDownList } from './DropDownList';

describe('DropDownList', () => {
    it('check dropdown link-menu', async () => {
        const dropNavLinks = [
            { dropLinkPath: '/', dropLinkValue: 'Квартира' },
            { dropLinkPath: '/', dropLinkValue: 'Дом' },
        ];
        render(
            <MemoryRouter>
                <DropDownList mainLinkPath="/" mainLinkValue="Имущество" dropNavLinks={dropNavLinks} />
            </MemoryRouter>
        );

        fireEvent.mouseOver(screen.getByText('Имущество'));

        await screen.findByTestId('dropDownList');

        expect(screen.getByText('Квартира')).toBeInTheDocument();
        expect(screen.getByText('Дом')).toBeInTheDocument();
        await expect(screen.getByTestId('dropDownList')).toMatchSnapshot();
    });
});
