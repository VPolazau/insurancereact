import { Portal } from './Portal';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Portal> = {
    title: 'UI/Portal',
    tags: ['autodocs'],
    component: Portal,
    argTypes: {
        children: {
            description: 'Наполнение портала (тип React.ReactElement)',
        },
        className: {
            type: 'string',
            description: 'Имена классов (заменяют стандартные стили)',
        },
        element: {
            type: 'string',
            description: 'Тег обёртки портала',
            defaultValue: 'div',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Portal>;

export const Standard: Story = {
    args: {
        children: <h3>Portal....</h3>,
        element: 'div',
    },
    decorators: [
        (Story) => (
            <div id="modal">
                <Story>
                    <h3>Portal...</h3>
                </Story>
            </div>
        ),
    ],
};
