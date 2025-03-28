import { render, screen } from '@testing-library/react';

import { Error } from './Error';

describe('Error', () => {
    it('should have error message', () => {
        const errorMessage = 'some error';
        render(<Error errorMessage={errorMessage} />);

        expect(screen.getByText(errorMessage)).toBeInTheDocument();
        expect(screen.getByTestId('typographyComponent').classList.contains('small')).toBe(true);
        expect(screen.getByTestId('typographyComponent').classList.contains('error')).toBe(true);
    });
});
