import type { Meta, StoryObj } from "@storybook/react";
import IndustryComponent from "./IndustryComponent";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: "Intive/Home/OurIndustries/IndustryComponent",
    component: IndustryComponent,
} satisfies Meta<typeof IndustryComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Automotive: Story = {
    args: {
        industry: "Automotive",
        categoryName: "Automotive",
    },
};
export const TECHNOLOGY_MEDIA_COMMUNICATOINS: Story = {
    args: {
        industry: "TECHNOLOGY,MEDIA & COMMUNICATOINS",
        categoryName: "Automotive",
    },
};
export const ENERGY_UTILITIES: Story = {
    args: {
        industry: "ENERGY & UTILITIES",
        categoryName: "Automotive",
    },
};
export const FINTECH: Story = {
    args: {
        industry: "FINTECH",
        categoryName: "Automotive",
    },
};
export const INDUSTRIAL: Story = {
    args: {
        industry: "INDUSTRIAL",
        categoryName: "Automotive",
    },
};

export const LIFE_SCEINCES: Story = {
    args: {
        industry: "LIFE SCEINCES",
        categoryName: "Automotive",
    },
};
export const ECOMMERCE_RETAIL_CONSUMER_PRODUCTS: Story = {
    args: {
        industry: "ECOMMERCE,RETAIL & CONSUMER PRODUCTS",
        categoryName: "Automotive",
    },
};
export const TELECOMMUNICATIONS: Story = {
    args: {
        industry: "TELECOMMUNICATIONS",
        categoryName: "Automotive",
    },
};
export const TRANSPOTATION: Story = {
    args: {
        industry: "TRANSPOTATION",
        categoryName: "Automotive",
    },
};
