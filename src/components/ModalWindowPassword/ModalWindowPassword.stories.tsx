import { ModalWindowPassword } from './ModalWindowPassword';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ModalWindowPassword> = {
    title: 'UI/ModalWindowPassword',
    tags: ['autodocs'],
    component: ModalWindowPassword,
    argTypes: {
        alt: {
            type: 'string',
            description: 'Результат выполнения смены пароля',
            defaultValue: 'success',
        },
        setIsOpen: {
            type: 'function',
            description: ' установит false в isOpen родительского компонента',
        },
        textMessage: {
            type: 'string',
            description: 'Текст сообщения',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ModalWindowPassword>;

export const Success: Story = {
    args: {
        alt: 'success',
        setIsOpen: () => {
            document?.querySelector('#modal')?.remove();
        },
    },
};

export const Error: Story = {
    args: {
        alt: 'error',
        setIsOpen: () => {
            document?.querySelector('#modal')?.remove();
        },
    },
};
