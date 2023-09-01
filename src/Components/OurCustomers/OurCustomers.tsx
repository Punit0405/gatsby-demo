import React from 'react';
import { OurCustomersDiv, OurCustomersh2 } from './OurCustomers.styled';
import BrandSlider from '../BrandSlider/BrandSlider';

const OurCustomers = () => {
  return (
    <OurCustomersDiv>
      <OurCustomersh2>Our customers</OurCustomersh2>
      <div>
        <BrandSlider />
      </div>
    </OurCustomersDiv>
  );
};

export default OurCustomers;
