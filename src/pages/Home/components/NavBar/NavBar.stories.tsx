import { Story, Meta } from '@storybook/react';

import { NavBar } from './NavBar';

export default {
    title: 'UI/NavBar',
    component: NavBar,
} as Meta;

const Template: Story = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
