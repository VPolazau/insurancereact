import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PHONE_NUMBER } from '../../utils/constants';
import { NavBar } from '../../pages/Home/components';
import { store } from '../../redux';

import { Header } from './Header';

const renderWithRouterandRedux = (component: JSX.Element) =>
    render(
        <Provider store={store}>
            <MemoryRouter>{component}</MemoryRouter>
        </Provider>
    );

describe('Header Component', () => {
    it('should render the IconButton', () => {
        renderWithRouterandRedux(<Header />);
        expect(screen.getAllByTestId('iconButtonComponent')[0]).toBeInTheDocument();
        expect(screen.getAllByTestId('iconButtonComponent')[1]).toBeInTheDocument();
    });

    it('should render the phone number', () => {
        renderWithRouterandRedux(<Header />);
        expect(screen.getByText(PHONE_NUMBER)).toBeInTheDocument();
    });

    it('should render the "Офисы" button', () => {
        renderWithRouterandRedux(<Header />);
        expect(screen.getByText('Офисы')).toBeInTheDocument();
    });

    it('should render the "Войти" button', () => {
        renderWithRouterandRedux(<Header />);
        expect(screen.getByText('Войти')).toBeInTheDocument();
    });

    it('should render the navigation bar', () => {
        renderWithRouterandRedux(
            <Header>
                <NavBar />
            </Header>
        );
        expect(screen.getByTestId('navbarComponent')).toBeInTheDocument();
    });

    it('should match the snapshot', () => {
        const { asFragment } = renderWithRouterandRedux(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });
});
