import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HumanNumbers from './HumanNumbers';
import HumanCentricComponent from './HumanCentricComponent';

describe('Testing Human Centric Component', () => {
  it('Testing Human Numbers Component', () => {
    render(<HumanNumbers numbers="4566" description="test tset" />);
    const numberComp = screen.getByText('4566');
    expect(numberComp).toBeInTheDocument();
  });
  it('Testing Human Numbers Component', () => {
    render(<HumanCentricComponent />);
    const number = screen.getByText('21');
    expect(number).toBeInTheDocument();
    const numberdescription = screen.getByText(
      'delivery centers and 6 design studios',
    );
    expect(numberdescription).toBeInTheDocument();
    const title = screen.getByText('Human-centric engineering');
    expect(title).toBeInTheDocument();
    const description = screen.getByText(
      'We connect industry expertise, design, and engineering to create digital products that empower users, deliver business value and make a societal impact',
    );
    expect(description).toBeInTheDocument();
  });
});
