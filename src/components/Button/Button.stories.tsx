import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    tags: ['autodocs'],
    component: Button,
    argTypes: {
        children: {
            type: 'string',
            description: 'Название',
        },
        className: {
            type: 'string',
            defaultValue: 'btn',
        },
        variant: {
            type: 'string',
            description: 'Вариант внешнего вида',
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'link'],
            control: {
                type: 'radio',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Primary',
        variant: 'primary',
        disabled: false,
    },
};
export const Secondary: Story = {
    args: {
        children: 'Secondary',
        variant: 'secondary',
        disabled: false,
    },
};
export const Link: Story = {
    args: {
        children: 'Link',
        variant: 'link',
        disabled: undefined,
    },
};
