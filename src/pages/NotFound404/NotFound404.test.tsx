import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from '../../components';
import { store } from '../../redux';

describe('Not Found Component', () => {
    it('should render elements', () => {
        const badRoute = '/some/bad/route';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[badRoute]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        const img = screen.getByTestId('img404');
        expect(img).toBeInTheDocument();

        const header = screen.getByTestId('header404');
        expect(header).toBeInTheDocument();

        const text = screen.getByTestId('text404');
        expect(text).toBeInTheDocument();

        const button = screen.getByText('Вернуться на главную');
        expect(button).toBeInTheDocument();
    });

    it('should match the snapshot', () => {
        const badRoute = '/some/bad/route';

        const { asFragment } = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[badRoute]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
