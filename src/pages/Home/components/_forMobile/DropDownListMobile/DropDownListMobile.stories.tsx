import { MemoryRouter } from 'react-router-dom';

import { DropDownListMobile } from './DropDownListMobile';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DropDownListMobile> = {
    title: 'UI/DropDownListMobile',
    tags: ['autodocs'],
    component: DropDownListMobile,
    argTypes: {
        mainLinkPath: {
            type: 'string',
            description: 'Url главной ссылки',
        },
        mainLinkValue: {
            type: 'string',
            description: 'Название главной ссылки',
        },
        dropNavLinks: {
            type: 'string',
            description: 'dropLinkPath - url адрес, dropLinkValue - название главной ссылки ',
        },
    },
};

export default meta;
type Story = StoryObj<typeof DropDownListMobile>;
export const DropDownLink: Story = {
    args: {
        mainLinkPath: '/',
        mainLinkValue: 'Имущество',
        dropNavLinks: [
            { dropLinkPath: '/', dropLinkValue: 'Квартира' },
            { dropLinkPath: '/', dropLinkValue: 'Дом' },
        ],
    },
    decorators: [
        (Story) => (
            <div style={{ height: '150px', width: '360px' }}>
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </div>
        ),
    ],
};
