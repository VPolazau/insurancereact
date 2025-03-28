/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ReactElement, useEffect } from 'react';

import { Portal } from './Portal';

interface IModalProps {
    onClose: () => void;
    children: ReactElement;
}

const Greet = () => {
    return <div>Hello World</div>;
};

const root = document.createElement('div');
root.setAttribute('id', 'modal');
document.body.appendChild(root);

const Modal = ({ onClose, children }: IModalProps) => {
    const elem = document.createElement('div');

    useEffect(() => {
        root.appendChild(elem);
        return () => {
            root.removeChild(elem);
        };
    });

    return (
        <Portal container={elem}>
            <div onClick={onClose}>
                <div onClick={(e) => e.stopPropagation()}>
                    {children}
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </Portal>
    );
};

describe('Portal', () => {
    const handleClose = jest.fn();
    it('should render children and a close button', () => {
        const { getByText } = render(
            <Modal onClose={handleClose}>
                <Greet />
            </Modal>
        );
        expect(getByText('Hello World')).toBeInTheDocument();
        userEvent.click(getByText(/close/i));
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
    it('should be unmounted', () => {
        const { getByText, unmount, queryByText } = render(
            <Modal onClose={handleClose}>
                <Greet />
            </Modal>
        );
        expect(getByText('Hello World')).toBeInTheDocument();
        unmount();
        expect(queryByText('Hello World')).not.toBeInTheDocument();
    });
});
