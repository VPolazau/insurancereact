import { NotificationCount } from './NotificationCount';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationCount> = {
    title: 'UI/NotificationCount',
    tags: ['autodocs'],
    component: NotificationCount,
    argTypes: {
        count: {
            description: 'Колличесво уведомлений',
        },
        top: {
            description: 'top при абослютном позиционировании',
        },
        left: {
            description: 'left при абослютном позиционировании',
        },
        isActiveLink: {
            description: 'Меняет стиль для тёмного фона',
        },
        className: {
            type: 'string',
            description: 'Имена классов (заменяют стандартные стили)',
        },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationCount>;
export const Standart: Story = {
    args: {
        top: '60px',
        left: '80px',
        count: 14,
        isActiveLink: false,
    },
    decorators: [
        (Story) => (
            <div style={{ height: '100px', width: '150px', backgroundColor: 'gray' }}>
                <Story />
            </div>
        ),
    ],
};
