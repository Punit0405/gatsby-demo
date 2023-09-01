import { render, screen } from '@testing-library/react';
import React from 'react';
import OurIndustries from './OurIndustries';
import '@testing-library/jest-dom';

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
describe('Rendering our industries', () => {
  it('Rendering Our Industries', () => {
    render(<OurIndustries />);
    const linkEle = screen.getByRole('link', {
      name: 'AUTOMOTIVE',
    });
    expect(linkEle).toBeInTheDocument();
    screen.debug();
  });
});
