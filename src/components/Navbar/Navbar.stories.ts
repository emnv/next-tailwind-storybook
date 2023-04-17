import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Example/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'info', 'warning', 'danger', 'default'],
      control: { type: 'radio' },
    }
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
};

export const Secondary: Story = {
    args: {
      variant: 'secondary'
    },
  };
  