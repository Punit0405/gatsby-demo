import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import InformatitonSection from './InformatitonSection';

jest.mock('gatsby', () => ({
  Link: ({ to, children }: any) => <a href={to}>{children}</a>,
  useStaticQuery: jest.fn(),
  graphql: jest.fn(),
}));
describe('Rendering Information Section', () => {
  it('Rendering Information Section', () => {
    render(<InformatitonSection></InformatitonSection>);
    const titleEle = screen.getByRole('heading', {
      name: 'How can we help you? Let’s talk.',
    });
    expect(titleEle).toBeInTheDocument();
    const titleEle1 = screen.getByRole('heading', {
      name: 'Want to join the exciting side of digital?',
    });
    expect(titleEle1).toBeInTheDocument();
    const linkEle1 = screen.getByRole('link', {
      name: 'COME ON BOARD',
    });
    expect(linkEle1).toBeInTheDocument();
  });
});
