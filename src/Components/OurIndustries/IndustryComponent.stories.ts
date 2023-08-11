import type { Meta, StoryObj } from '@storybook/react';
import OurIndustries from './OurIndustries';
import IndustryComponent from './IndustryComponent';




// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Intive/Home/OurIndustries/IndustryComponent',
  component: IndustryComponent,
} satisfies Meta<typeof IndustryComponent>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Automotive: Story = {
    args:{
        industry:"Automotive"
    }
};
export const TECHNOLOGY_MEDIA_COMMUNICATOINS: Story = {
    args:{
        industry:"TECHNOLOGY,MEDIA & COMMUNICATOINS"
    }
};
export const ENERGY_UTILITIES: Story = {
    args:{
        industry:"ENERGY & UTILITIES"
    }
};
export const FINTECH: Story = {
    args:{
        industry:"FINTECH"
    }
};
export const INDUSTRIAL: Story = {
    args:{
        industry:"INDUSTRIAL"
    }
};

export const LIFE_SCEINCES: Story = {
    args:{
        industry:"LIFE SCEINCES"
    }
};
export const ECOMMERCE_RETAIL_CONSUMER_PRODUCTS: Story = {
    args:{
        industry:"ECOMMERCE,RETAIL & CONSUMER PRODUCTS"
    }
};
export const TELECOMMUNICATIONS: Story = {
    args:{
        industry:"TELECOMMUNICATIONS"
    }
};
export const TRANSPOTATION: Story = {
    args:{
        industry:"TRANSPOTATION"
    }
};


