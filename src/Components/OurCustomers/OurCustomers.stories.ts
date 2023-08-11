import type { Meta, StoryObj } from '@storybook/react';
import OurCustomers from './OurCustomers';




// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Intive/Home/OurCustomers',
  component: OurCustomers,
} satisfies Meta<typeof OurCustomers>;

export default meta;

type Story = StoryObj<typeof meta>;
export const OurCustomersView: Story = {
    args:{
        industry:"Automotive"
    }
};



