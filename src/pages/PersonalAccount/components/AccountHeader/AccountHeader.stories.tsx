import { MemoryRouter } from 'react-router-dom';

import { AccountHeader } from './AccountHeader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AccountHeader> = {
    title: 'UI/AccountHeader',
    tags: ['autodocs'],
    component: AccountHeader,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AccountHeader>;

export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{ border: 'solid 2px black', padding: '10px' }}>
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </div>
        ),
    ],
};
