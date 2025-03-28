import { Checkbox } from './index';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
    title: 'UI/Checkbox',
    tags: ['autodocs'],
    component: Checkbox,
    argTypes: {
        title: { description: 'Описание' },
        name: { description: 'Группа' },
        checked: { description: 'Отмеченный checkbox', control: false },
        onChange: { description: 'Callback функция, вызываемая при изменении значения' },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxInput: Story = {
    args: {
        title: 'Подписаться на рассылку',
        name: 'mailing',
        checked: true,
    },
};
