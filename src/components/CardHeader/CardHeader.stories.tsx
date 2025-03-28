import { CardHeader } from './CardHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CardHeader> = {
    title: 'UI/CardHeader',
    tags: ['autodocs'],
    component: CardHeader,
    argTypes: {
        children: {
            component: 'Дочерний компонент',
        },
        className: {
            type: 'string',
        },
    },
};

export default meta;
type Story = StoryObj<typeof CardHeader>;

export const Default: Story = {
    args: {
        children: 'Дочерний компонент',
        className: 'someClass',
    },
};
