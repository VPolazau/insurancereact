import { Story, Meta } from '@storybook/react';

import { SLIDES } from '../../../../utils/constants';

import { Slider, SliderProps } from './Slider';

export default {
    title: 'UI/Slider',
    component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
    slides: SLIDES,
};
