import React from 'react';
import BaseTextField from './BaseTextField';

export default {
  title: 'Atoms/BaseTextField',
  component: BaseTextField,
  argTypes: {
    variant: { control: 'select', options: ['standard', 'outlined', 'filled'] },
    color: { control: 'select', options: ['primary', 'secondary'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

const Template = (args) => <BaseTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'outlined',
  color: 'primary',
  label: 'Outlined Text Field',
  placeholder: 'Enter text',
};
