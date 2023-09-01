import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import WorkComponent from './WorkComponent';

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
describe('Rendering Workcomponent', () => {
  it('Rendering WorkComponent', () => {
    render(<WorkComponent />);
    const titleElement = screen.getByRole('heading', {
      name: 'Work',
    });
    expect(titleElement).toBeInTheDocument();
    const descEle = screen.getByText(
      /With over 20 years of experience working with market-leading companies, we know what it takes to create tailor-made solutions that exceed expectations and create excitement and delight for our customers. Digital enthusiasm is at our core./i,
    );
    expect(descEle).toBeInTheDocument();
    const linkELE = screen.getByRole('link', {
      name: 'AUTOMOTIVE',
    });
    expect(linkELE).toBeInTheDocument();
    const linkNotELE = screen.queryByRole('link', {
      name: 'FINTECH',
    });
    expect(linkNotELE).not.toBeInTheDocument();
  });
});
