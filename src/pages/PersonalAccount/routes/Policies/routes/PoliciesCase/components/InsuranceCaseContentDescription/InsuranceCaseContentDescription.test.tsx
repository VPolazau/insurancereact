import React from 'react';
import { render, screen } from '@testing-library/react';

import { InsuranceCaseContentDescription } from './InsuranceCaseContent';

describe('InsuranceCaseContentDescription component', () => {
    it('Rendering InsuranceCaseContentDescription component', () => {
        render(<InsuranceCaseContentDescription />);
        expect(screen.getByTestId('InsuranceCaseContentDescription')).toBeInTheDocument();
        expect(screen.getByTestId('InsuranceCaseContentDescription')).toHaveClass('scrollDescription');
    });

    it('Rendering list of InsuranceCaseContentDescription component', () => {
        render(<InsuranceCaseContentDescription />);
        expect(screen.getByTestId('list')).toBeInTheDocument();
        expect(screen.getByTestId('list')).toHaveClass('descriptionBlock');
    });

    it('Rendering count of all lists in the component including nested lists', () => {
        render(<InsuranceCaseContentDescription />);
        expect(screen.getAllByRole(/list/)).toHaveLength(13);
    });
});
