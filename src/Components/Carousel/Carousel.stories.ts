import type { Meta, StoryObj } from "@storybook/react";
import CarouselComponent from "./Carousel";



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "Intive/Home/CarouselComponent",
    component: CarouselComponent,
} satisfies Meta<typeof CarouselComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CarousalComponent: Story = {
    args: {
        links:["INDUSTRIES","SERVICES","INSIGHTS","ABOUT","CAREERS","CONTACT"]
    },
};

