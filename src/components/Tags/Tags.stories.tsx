import { MemoryRouter } from 'react-router-dom';

import { Tags } from './Tags';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tags> = {
    title: 'UI/Tags',
    tags: ['autodocs'],
    component: Tags,
    argTypes: {
        list: {
            description: '{ tag: string; path: string; count?: number }[]',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tags>;

const tagList = [
    { tag: 'Страховые полисы', path: 'insurance-policies' },
    { tag: 'Заявки на страхование', path: 'insurance-requests', count: 2 },
    { tag: 'Страховой случай', path: 'insurance-case' },
];
export const Primary: Story = {
    args: {
        list: tagList,
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flexStart',
                    gap: '40px',
                    marginTop: '12px',
                    height: '46px',
                }}
            >
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </div>
        ),
    ],
};
