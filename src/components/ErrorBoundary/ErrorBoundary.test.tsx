import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '../../redux';

import { ErrorBoundary } from './ErrorBoundary';

const renderProviders = (ui: React.ReactElement) => render(ui, {});

describe('Error Boundary', () => {
    const Child = () => {
        throw new Error();
    };

    it('should render error boundary component when there is an error', () => {
        renderProviders(
            <Provider store={store}>
                <BrowserRouter>
                    <ErrorBoundary>
                        <Child />
                    </ErrorBoundary>
                </BrowserRouter>
            </Provider>
        );

        const errorMessage = screen.getByText(/Произошла непредвиденная ошибка/i);
        const link = screen.getByText(/Вернуться на главную/i);
        expect(errorMessage).toBeDefined();
        expect(link).toBeInTheDocument();
    });
});
