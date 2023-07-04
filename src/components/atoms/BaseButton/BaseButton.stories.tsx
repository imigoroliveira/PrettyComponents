import React from 'react';
import BaseButton from './BaseButton';

export default {
  title: 'Atoms/BaseButton',
  component: BaseButton,
  argTypes: {
    title: { control: 'text' },
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    color: { control: 'select', options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'] },
    to: { control: 'text' },
  },
};

const Template = (args) => <BaseButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Button',
  variant: 'contained',
  color: 'primary',
  to: '/',
};


export const Primary = Template.bind({});
Primary.args = {
    title: 'Default Button',
    variant: 'contained',
    color: 'primary',
    to: '/',
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: 'Default Button',
    variant: 'contained',
    color: 'primary',
    to: '/',
};
