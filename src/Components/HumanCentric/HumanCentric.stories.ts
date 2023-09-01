import type { Meta, StoryObj } from '@storybook/react';
import HumanCentricComponent from './HumanCentricComponent';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Intive/Home/HumanCentricSection',
  component: HumanCentricComponent,
} satisfies Meta<typeof HumanCentricComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const HumanCentricComponentView: Story = {
  args: {
    image:
      'https://images.ctfassets.net/ue4ib83wzj4v/2sItMWjiZXM9QXAqk2RPCw/a501afbd10218cf1330201168d9fd034/EdTech_Header.png?w=1810&h=905&q=100&fm=png&bg=transparent',
  },
};
