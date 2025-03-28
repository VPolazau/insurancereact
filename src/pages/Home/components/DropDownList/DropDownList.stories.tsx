import { MemoryRouter } from 'react-router-dom';

import { DropDownList } from './DropDownList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DropDownList> = {
    title: 'UI/DropDownList',
    tags: ['autodocs'],
    component: DropDownList,
    argTypes: {
        mainLinkPath: {
            type: 'string',
            description: 'Url главной ссылки',
        },
        mainLinkValue: {
            type: 'string',
            description: 'Название главной ссылки',
        },
        className: {
            type: 'string',
            description: 'Имена классов (заменяют стандартные стили)',
        },
        dropNavLinks: {
            type: 'string',
            description: 'dropLinkPath - url адрес, dropLinkValue - название главной ссылки ',
        },
    },
};

export default meta;
type Story = StoryObj<typeof DropDownList>;
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
            <div style={{ height: '150px' }}>
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </div>
        ),
    ],
};
