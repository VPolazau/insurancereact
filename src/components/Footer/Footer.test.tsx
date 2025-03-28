import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { MAIN_OFFICE_ADDRESS, PHONE_NUMBER } from '../../utils/constants';
import { decodeHtmlEntities } from '../../utils/utilities';

import { Footer } from './Footer';

describe('Footer Component', () => {
    it('should render the iconButton', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(screen.getByTestId('iconButtonComponent')).toBeInTheDocument();
    });

    it('should render the main office information', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(screen.getByText('Главный офис')).toBeInTheDocument();
        expect(
            screen.getByText((content, element) => {
                const decodedAddress = decodeHtmlEntities(MAIN_OFFICE_ADDRESS);
                return element?.textContent === decodedAddress;
            })
        ).toBeInTheDocument();
    });

    it('should render the contact information', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(screen.getByText('Связаться с нами')).toBeInTheDocument();
        expect(screen.getByText(PHONE_NUMBER)).toBeInTheDocument();
    });

    it('should match the snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
