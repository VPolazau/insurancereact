import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { NavBar } from './NavBar';

describe('NavBar Component', () => {
    it('button-1', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
        expect(screen.getByText('Авто')).toBeInTheDocument();
    });
    it('button-2', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
        expect(screen.getByText('Имущество')).toBeInTheDocument();
    });
    it('button-3', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
        expect(screen.getByText('Здоровье')).toBeInTheDocument();
    });
    it('button-4', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
        expect(screen.getByText('Отдых')).toBeInTheDocument();
    });
    it('should render the special button', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
        expect(screen.getByText('Страховой случай')).toBeInTheDocument();
    });
    it('should match the snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
