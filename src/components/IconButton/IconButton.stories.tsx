import menuBurger from '../../assets/img/menu_burger.svg';

import { IconButton } from './IconButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconButton> = {
    title: 'UI/IconButton',
    tags: ['autodocs'],
    component: IconButton,
    argTypes: {
        size: {
            type: 'number',
            description: 'Размер логотипа',
            control: {
                type: 'range',
                min: 20,
                max: 60,
                step: 1,
            },
        },
        icon: {
            type: 'string',
            description: '',
        },
        className: {
            type: 'string',
        },
        alt: {
            type: 'string',
            defaultValue: 'iconButton',
        },
    },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const LogoBtn: Story = {
    args: { size: 49, icon: menuBurger },
};
