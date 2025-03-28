import { render, screen, waitFor } from '@testing-library/react';

import { Loader } from './Loader';

describe('Loader', () => {
    it('should be in the document', () => {
        render(<Loader />);

        waitFor(() => { // eslint-disable-line
            expect(screen.getByTestId('loader')).toBeInTheDocument();
        });
    });
});
