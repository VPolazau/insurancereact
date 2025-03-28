import { render, fireEvent, screen } from '@testing-library/react';

import menu_burger from '../../assets/img/menu_burger.svg';

import { IconButton } from './IconButton';

describe('IconButton component', () => {
    it('should render the IconButton with default size and trigger onClick event', () => {
        const onClickMock = jest.fn();
        render(<IconButton onClick={onClickMock} icon={menu_burger} />);

        const iconButtonComponent = screen.getByTestId('iconButtonComponent');
        const iconButtonImage = screen.getByAltText('iconButton');

        expect(iconButtonComponent).toBeInTheDocument();
        expect(iconButtonImage).toBeInTheDocument();
        expect(iconButtonImage).toHaveStyle('height: 46px');

        fireEvent.click(iconButtonComponent);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('should render the IconButton with a custom size and trigger onClick event', () => {
        const onClickMock = jest.fn();
        render(<IconButton size={64} onClick={onClickMock} icon={menu_burger} />);

        const iconButtonComponent = screen.getByTestId('iconButtonComponent');
        const iconButtonImage = screen.getByAltText('iconButton');

        expect(iconButtonComponent).toBeInTheDocument();
        expect(iconButtonImage).toBeInTheDocument();
        expect(iconButtonImage).toHaveStyle('height: 64px');

        fireEvent.click(iconButtonComponent);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('should match snapshot for default size', () => {
        const onClickMock = jest.fn();
        const { container } = render(<IconButton onClick={onClickMock} icon={menu_burger} />);
        expect(container).toMatchSnapshot();
    });

    it('should match snapshot for custom size', () => {
        const onClickMock = jest.fn();
        const { container } = render(<IconButton size={64} onClick={onClickMock} icon={menu_burger} />);
        expect(container).toMatchSnapshot();
    });
});
