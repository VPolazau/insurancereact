import { Story, Meta } from '@storybook/react';

import { Header } from './Header';

export default {
    title: 'UI/Header',
    component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
