import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import OurOffices from './OurOffices';

jest.mock('gatsby', () => ({
  Link: ({ to, children }: any) => <a href={to}>{children}</a>,
  useStaticQuery: jest.fn().mockReturnValue({
    categories: {
      nodes: [
        {
          id: 'AUTOMOTIVE',
          categoryName: 'AUTOMOTIVE',
          mainTitle: 'AUTOMOTIVE',
        },
      ],
    },
  }),
  graphql: jest.fn(),
}));
describe('Rendering Our Offices', () => {
  it('Rendering Our Offices', () => {
    render(<OurOffices />);
    const titleEle = screen.getByRole('heading', {
      name: 'A global company',
    });
    expect(titleEle).toBeInTheDocument();
    const descEle = screen.getByText(
      /intive transcends borders, with over 3,000 team members and 37 nationalities, spread across 3 continents\./i,
    );
    expect(descEle).toBeInTheDocument();
  });
});
