import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    it('Button-primary', () => {
        render(<Button variant="primary" children="button" onClick={() => {}} />);
        expect(screen.getByTestId('button').textContent).toBe('button');
        expect(screen.getByTestId('button').classList.contains('primary')).toBe(true);
        expect(screen.getByTestId('button')).toBeInTheDocument();
        expect(screen.getByTestId('button')).toMatchSnapshot();
    });
    it('Button-secondary', () => {
        render(<Button variant="secondary" children="button" onClick={() => {}} />);
        expect(screen.getByTestId('button').textContent).toBe('button');
        expect(screen.getByTestId('button').classList.contains('secondary')).toBe(true);
        expect(screen.getByTestId('button')).toBeInTheDocument();
        expect(screen.getByTestId('button')).toMatchSnapshot();
    });
    it('Button-primary-disabled', () => {
        render(<Button variant="primary" children="button" disabled={true} onClick={() => {}} />);
        expect(screen.getByTestId('button').textContent).toBe('button');
        expect(screen.getByTestId('button').classList.contains('primary')).toBe(true);
        // @ts-ignore
        expect(screen.getByTestId('button').disabled).toBe(true);
        expect(screen.getByTestId('button')).toBeInTheDocument();
        expect(screen.getByTestId('button')).toMatchSnapshot();
    });
    it('Button-secondary-disabled', () => {
        render(<Button variant="secondary" children="button" disabled={true} onClick={() => {}} />);
        expect(screen.getByTestId('button').textContent).toBe('button');
        expect(screen.getByTestId('button').classList.contains('secondary')).toBe(true);
        // @ts-ignore
        expect(screen.getByTestId('button').disabled).toBe(true);
        expect(screen.getByTestId('button')).toBeInTheDocument();
        expect(screen.getByTestId('button')).toMatchSnapshot();
    });
    it('Button-link', () => {
        render(<Button variant="link" children="button" onClick={() => {}} />);
        expect(screen.getByTestId('button').textContent).toBe('button');
        expect(screen.getByTestId('button').classList.contains('link')).toBe(true);
        expect(screen.getByTestId('button')).toBeInTheDocument();
        expect(screen.getByTestId('button')).toMatchSnapshot();
    });
});
