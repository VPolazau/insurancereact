import { InfoCard } from './InfoCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InfoCard> = {
    title: 'UI/InfoCard',
    tags: ['autodocs'],
    component: InfoCard,
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Card: Story = {
    args: {
        children: <span style={{ fontSize: '50px' }}>Card</span>,
    },
};
