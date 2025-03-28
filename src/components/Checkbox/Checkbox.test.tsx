import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    const title = 'some checkbox title';
    const name = 'some checkbox name';
    const onChangeMock = jest.fn();
    it('should have label and title', () => {
        render(<Checkbox title={title} name={name} checked={false} onChange={onChangeMock} />);

        const checkboxComponent = screen.getByTestId('checkboxComponent');
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByLabelText(title)).toBeInTheDocument();
        expect(checkboxComponent).toBeInTheDocument();
    });
    it('should be checked after onChange trigger', () => {
        render(<Checkbox title={title} name={name} checked={false} onChange={onChangeMock} />);
        const checkboxComponent = screen.getByTestId('checkboxComponent');

        expect(checkboxComponent).toBeInTheDocument();
        expect(checkboxComponent).not.toBeChecked();
        fireEvent.click(checkboxComponent);
        expect(checkboxComponent).toBeChecked();
    });
    it('should be unchecked after onChange trigger', () => {
        render(<Checkbox title={title} name={name} checked={true} onChange={onChangeMock} />);
        const checkboxComponent = screen.getByTestId('checkboxComponent');

        expect(checkboxComponent).toBeInTheDocument();
        expect(checkboxComponent).toBeChecked();
        fireEvent.click(checkboxComponent);
        expect(checkboxComponent).not.toBeChecked();
    });
});
