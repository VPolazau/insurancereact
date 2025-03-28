import { Typography, TypographyProps } from './Typography';

import type { Meta, Story } from '@storybook/react';

export default {
    tags: ['autodocs'],
    title: 'UI/Typography',
    component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Heading1: Story<TypographyProps> = Template.bind({});
Heading1.args = {
    variant: 'h1',
    children: 'Heading 1',
};

export const Heading2: Story<TypographyProps> = Template.bind({});
Heading2.args = {
    variant: 'h2',
    children: 'Heading 1',
};

export const Heading3: Story<TypographyProps> = Template.bind({});
Heading3.args = {
    variant: 'h3',
    children: 'Heading 1',
};

export const Heading4: Story<TypographyProps> = Template.bind({});
Heading4.args = {
    variant: 'h4',
    children: 'Heading 4',
};

export const Heading5: Story<TypographyProps> = Template.bind({});
Heading5.args = {
    variant: 'h5',
    children: 'Heading 5',
};

export const Small: Story<TypographyProps> = Template.bind({});
Small.args = {
    variant: 'small',
    children: 'Small Text',
};

export const Medium: Story<TypographyProps> = Template.bind({});
Medium.args = {
    variant: 'medium',
    children: 'Medium Text',
};

export const Emphasis: Story<TypographyProps> = Template.bind({});
Medium.args = {
    variant: 'emphasis',
    children: 'Emphasis Text',
};
