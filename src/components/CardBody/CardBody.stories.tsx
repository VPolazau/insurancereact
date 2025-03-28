import { CardBody } from './CardBody';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CardBody> = {
    title: 'UI/CardBody',
    tags: ['autodocs'],
    component: CardBody,
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
type Story = StoryObj<typeof CardBody>;

export const Default: Story = {
    args: {
        children: 'Дочерний компонент',
        className: 'someClass',
    },
};
