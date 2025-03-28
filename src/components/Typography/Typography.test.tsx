import { render, screen } from '@testing-library/react';

import { Typography } from './Typography';

describe('Typography Component', () => {
    it('should render with "h1" variant class', () => {
        const variant = 'h1';
        render(<Typography variant={variant}>Hello, World!</Typography>);
        expect(screen.getByTestId('typographyComponent')).toHaveClass(variant);
    });

    it('should render with "h2" variant class', () => {
        const variant = 'h2';
        render(<Typography variant={variant}>Hello, World!</Typography>);
        expect(screen.getByTestId('typographyComponent')).toHaveClass(variant);
    });

    it('should render with "h3" variant class', () => {
        const variant = 'h3';
        render(<Typography variant={variant}>Hello, World!</Typography>);
        expect(screen.getByTestId('typographyComponent')).toHaveClass(variant);
    });

    it('should render with "h4" variant class', () => {
        const variant = 'h4';
        render(<Typography variant={variant}>Hello, World!</Typography>);
        expect(screen.getByTestId('typographyComponent')).toHaveClass(variant);
    });

    it('should render with "h5" variant class', () => {
        const variant = 'h5';
        render(<Typography variant={variant}>Hello, World!</Typography>);
        expect(screen.getByTestId('typographyComponent')).toHaveClass(variant);
    });

    it('should render with "medium" variant class', () => {
        const variant = 'medium';
        render(<Typography variant={variant}>Hello, World!</Typography>);
        expect(screen.getByTestId('typographyComponent')).toHaveClass(variant);
    });

    it('should render with "small" variant class', () => {
        const variant = 'small';
        render(<Typography variant={variant}>Hello, World!</Typography>);
        expect(screen.getByTestId('typographyComponent')).toHaveClass(variant);
    });

    it('should render with "emphasis" variant class', () => {
        const variant = 'emphasis';
        render(<Typography variant={variant}>Hello, World!</Typography>);
        expect(screen.getByTestId('typographyComponent')).toHaveClass(variant);
    });

    it('should render with correct className', () => {
        const className = 'custom-class';
        render(
            <Typography variant="h4" className={className}>
                Hello, World!
            </Typography>
        );
        expect(screen.getByTestId('typographyComponent')).toHaveClass(className);
    });

    it('should render the correct text', () => {
        const text = 'Hello, World!';
        render(
            <Typography variant="medium" className="custom-class">
                {text}
            </Typography>
        );
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('should match the snapshot', () => {
        const variant = 'h1';
        const className = 'custom-class';
        const text = 'Hello, World!';
        const { asFragment } = render(
            <Typography variant={variant} className={className}>
                {text}
            </Typography>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
