import { MemoryRouter, Route, Routes } from 'react-router';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import { EmailConfirmation } from './EmailConfirmation';

describe('EmailConfirmation', () => {
    it('should render elements', () => {
        const route = '/registration/email/confirmation';

        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route path={route} element={<EmailConfirmation />} />
            </Routes>
        </MemoryRouter>;

        waitFor(() => { // eslint-disable-line
            expect(screen.getByTestId('button')).toBeInTheDocument();
        });
    });

    it('should navigate to the Home page', () => {
        const route = '/registration/email/confirmation';

        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route path={route} element={<EmailConfirmation />} />
                <Route path="/home" element={<div>HomePage</div>} />
            </Routes>
        </MemoryRouter>;

        waitFor(() => expect(screen.getByTestId('button')).toBeInTheDocument()).then(() => { // eslint-disable-line
            fireEvent.click(screen.getByTestId('button'));
            expect(screen.getByText('HomePage')).toBeTruthy();
        });
    });
});
