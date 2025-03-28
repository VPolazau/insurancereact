import { MemoryRouter } from 'react-router-dom';

import { RadioBtnGroup } from '../RadioBtnGroup';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioBtnGroup> = {
    title: 'UI/RadioButton',
    tags: ['autodocs'],
    component: RadioBtnGroup,
    argTypes: {
        groupName: { description: 'Название группы кнопок' },
        options: { description: 'Возможные варианты выбора' },
        selected: { description: 'Устанавливает checked для radio с совпадающим value', control: false },
        onChange: { description: 'Callback функция, вызываемая при изменении значения' },
    },
};

export default meta;
type Story = StoryObj<typeof RadioBtnGroup>;

export const RadioButton: Story = {
    args: {
        groupName: 'push',
        options: [{ value: 'on', title: 'Вкл' }],
    },
};

export const RadioGroup: Story = {
    args: {
        groupName: 'push-notifications',
        options: [
            { value: 'on', title: 'Вкл' },
            { value: 'off', title: 'Выкл' },
        ],
        selected: 'on',
    },
    decorators: [
        (Story) => {
            return (
                <div>
                    <MemoryRouter>
                        <Story />
                    </MemoryRouter>
                </div>
            );
        },
    ],
};
