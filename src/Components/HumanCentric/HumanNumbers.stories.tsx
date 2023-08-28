import type { Meta, StoryObj } from "@storybook/react";
import HumanCentricComponent from "./HumanCentricComponent";
import HumanNumbers from "./HumanNumbers";



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "Intive/Home/HumanCentricSection/HumanNumbersComponent",
    component: HumanNumbers,
    decorators: [
        (Story, options) => (
            <div style={{
                fontFamily:"Lato', sans-serif",
                border:"2px solid red"
            }}>
                <Story/>
            </div>
        )
    ],
} satisfies Meta<typeof HumanNumbers>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const HumanNumbersComponentView: Story = {
    args:{
        numbers:"21",
        description:"delivery centers and 6 design studios"
    }
};
export const HumanNumbersComponentView2: Story = {
    args:{
        numbers:"+3,000",
        description:"digital enthusiasts"
    }
};
export const HumanNumbersComponentView3: Story = {
    args:{
        numbers:"75",
        description:"pts NPSs"
    }
};
export const HumanNumbersComponentView4: Story = {
    args:{
        numbers:"+50%",
        description:"revenue growth in 2021"
    }
};
export const HumanNumbersComponentView5: Story = {
    args:{
        numbers:"23",
        description:"years of experience, founded in garage in Helsinki in 1999"
    }
};
export const HumanNumbersComponentView6: Story = {
    args:{
        numbers:"3",
        description:"continents - present in Europe and the Americas"
    }
};

