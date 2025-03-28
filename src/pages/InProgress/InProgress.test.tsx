import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from '../../components';
import { store } from '../../redux';

describe('InProgress Component', () => {
    it('should render elements', () => {
        const route = '/in-progress';

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );

        const img = screen.getByTestId('imgInProgress');
        expect(img).toBeInTheDocument();

        const header = screen.getByTestId('headerInProgress');
        expect(header).toBeInTheDocument();

        const button = screen.getByText('Назад');
        expect(button).toBeInTheDocument();
    });

    it('should match the snapshot', () => {
        const route = '/in-progress';

        const { asFragment } = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[route]}>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
