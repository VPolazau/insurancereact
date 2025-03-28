import { Error } from './Error';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Error> = {
    title: 'UI/Error',
    tags: ['autodocs'],
    component: Error,
    argTypes: {
        errorMessage: {
            type: 'string',
            description: 'Сообщение об ошибке',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Error>;

export const Default: Story = {
    args: {
        errorMessage: 'error message',
    },
};
