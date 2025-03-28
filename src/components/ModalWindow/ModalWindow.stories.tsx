import { ModalWindow } from './ModalWindow';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ModalWindow> = {
    title: 'UI/ModalWindow',
    tags: ['autodocs'],
    component: ModalWindow,
    argTypes: {
        height: {
            type: 'string',
        },
        width: {
            type: 'string',
        },
        top: {
            type: 'string',
        },
        right: {
            type: 'string',
        },
        bottom: {
            type: 'string',
        },
        left: {
            type: 'string',
        },
        children: {
            description: 'Наполнение портала (тип React.ReactElement)',
        },
        className: {
            type: 'string',
        },
        addBtnClose: {
            type: 'boolean',
            description: 'Добавить кнопку крестика',
            defaultValue: false,
        },
        setIsOpen: {
            type: 'function',
            description: ' установит false в isOpen родительского компонента',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ModalWindow>;

export const Standard: Story = {
    args: {
        children: <h3>ModalWindow....</h3>,
        height: '150px',
        width: '400px',
        top: '40px',
        left: '500px',
        addBtnClose: true,
        setIsOpen: () => {
            document?.querySelector('#modal')?.remove();
        },
    },
    decorators: [
        (Story) => (
            <div id="modal">
                <Story />
            </div>
        ),
    ],
};
