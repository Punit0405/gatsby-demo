import type { Meta, StoryObj } from '@storybook/react';
import OurIndustries from './OurIndustries';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Intive/Home/OurIndustries',
  component: OurIndustries,
} satisfies Meta<typeof OurIndustries>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const OurIndustriesView: Story = {};
