import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import CategoryInfo from './CategoryInfo';

jest.mock('gatsby', () => ({
  Link: ({ to, children }: any) => <a href={to}>{children}</a>,
  useStaticQuery: jest.fn(),
  graphql: jest.fn(),
}));
describe('Rendering Category info', () => {
  it('Rendering Category info', () => {
    const arrData = [
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/XumiS0o6rsaFmWC9oO5Vl/f16d9ad75842abbf87280e002f71d01d/icon-automotive-autonomous-driving.svg',
        description:
          'Algorithms and functions for advanced driver assistance systems.',
        link: 'https://intive.com/work/automotive/advanced-driver-assistance-systems',
        title: 'ADAS',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/VgRbD8Nmcbbr43r45YxEv/0d5038d9b1e18f3125c7fbf25f2aaa35/icon-automotive-connected-car.svg',
        description:
          'Innovative AUTOSAR-compliant software development with embedded security.',
        link: 'https://intive.com/work/automotive/body-comfort-and-connect',
        title: 'Body, Comfort & Connect',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/7LU72wMEd4jf220m1Mc8N2/0d15b22c285243add8949bdd774f5457/icon-automotive-ai-and-algorithms.svg',
        description:
          'Utilising the latest ML and data science technologies to develop smart solutions to complex tasks.',
        link: 'https://intive.com/work/automotive/ai-and-algorithms',
        title: 'AI & ALGORITHMS',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/18KWDG1BSgyfZML0GmQoY2/e3dff0e37dc6a47f78712427ebad3a59/icon-services-enterprise-applications.svg',
        description:
          'Sophisticated analysis, tracking, and remote diagnostic tools, supported by cloud-based virtualisation for connected digital car-as-a-service.',
        link: 'https://intive.com/work/automotive/cloud-and-backend-solutions',
        title: 'Cloud & Backend Solutions',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/7D2YijcXIxdmc8aG7AgpJX/8de68156ca493e7845f69af06c1944fd/icon-automotive-infotainment-systems.svg',
        description:
          'Prototypes, mock-ups, 3D visualisations, and VR/AR interactions.',
        link: 'https://intive.com/work/automotive/hmi-and-infotainment',
        title: 'HMI & Infotainment Development Services',
      },
    ];
    render(<CategoryInfo categoryData={arrData} />);
    const titleEle = screen.getByRole('heading', {
      name: 'Open up new exciting opportunities',
    });
    expect(titleEle).toBeInTheDocument();
  });

  it('Testing Images', () => {
    const arrData = [
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/XumiS0o6rsaFmWC9oO5Vl/f16d9ad75842abbf87280e002f71d01d/icon-automotive-autonomous-driving.svg',
        description:
          'Algorithms and functions for advanced driver assistance systems.',
        link: 'https://intive.com/work/automotive/advanced-driver-assistance-systems',
        title: 'ADAS',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/VgRbD8Nmcbbr43r45YxEv/0d5038d9b1e18f3125c7fbf25f2aaa35/icon-automotive-connected-car.svg',
        description:
          'Innovative AUTOSAR-compliant software development with embedded security.',
        link: 'https://intive.com/work/automotive/body-comfort-and-connect',
        title: 'Body, Comfort & Connect',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/7LU72wMEd4jf220m1Mc8N2/0d15b22c285243add8949bdd774f5457/icon-automotive-ai-and-algorithms.svg',
        description:
          'Utilising the latest ML and data science technologies to develop smart solutions to complex tasks.',
        link: 'https://intive.com/work/automotive/ai-and-algorithms',
        title: 'AI & ALGORITHMS',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/18KWDG1BSgyfZML0GmQoY2/e3dff0e37dc6a47f78712427ebad3a59/icon-services-enterprise-applications.svg',
        description:
          'Sophisticated analysis, tracking, and remote diagnostic tools, supported by cloud-based virtualisation for connected digital car-as-a-service.',
        link: 'https://intive.com/work/automotive/cloud-and-backend-solutions',
        title: 'Cloud & Backend Solutions',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/7D2YijcXIxdmc8aG7AgpJX/8de68156ca493e7845f69af06c1944fd/icon-automotive-infotainment-systems.svg',
        description:
          'Prototypes, mock-ups, 3D visualisations, and VR/AR interactions.',
        link: 'https://intive.com/work/automotive/hmi-and-infotainment',
        title: 'HMI & Infotainment Development Services',
      },
    ];
    render(<CategoryInfo categoryData={arrData} />);
    const image = screen.getByRole('img', {
      name: arrData[0].image,
    });
    expect(image).toBeInTheDocument();
    const image1 = screen.getByRole('img', {
      name: arrData[1].image,
    });
    expect(image1).toBeInTheDocument();
    const image2 = screen.getByRole('img', {
      name: arrData[2].image,
    });
    expect(image2).toBeInTheDocument();
  });
  it('Testing Titles', () => {
    const arrData = [
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/XumiS0o6rsaFmWC9oO5Vl/f16d9ad75842abbf87280e002f71d01d/icon-automotive-autonomous-driving.svg',
        description:
          'Algorithms and functions for advanced driver assistance systems.',
        link: 'https://intive.com/work/automotive/advanced-driver-assistance-systems',
        title: 'ADAS',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/VgRbD8Nmcbbr43r45YxEv/0d5038d9b1e18f3125c7fbf25f2aaa35/icon-automotive-connected-car.svg',
        description:
          'Innovative AUTOSAR-compliant software development with embedded security.',
        link: 'https://intive.com/work/automotive/body-comfort-and-connect',
        title: 'Body, Comfort & Connect',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/7LU72wMEd4jf220m1Mc8N2/0d15b22c285243add8949bdd774f5457/icon-automotive-ai-and-algorithms.svg',
        description:
          'Utilising the latest ML and data science technologies to develop smart solutions to complex tasks.',
        link: 'https://intive.com/work/automotive/ai-and-algorithms',
        title: 'AI & ALGORITHMS',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/18KWDG1BSgyfZML0GmQoY2/e3dff0e37dc6a47f78712427ebad3a59/icon-services-enterprise-applications.svg',
        description:
          'Sophisticated analysis, tracking, and remote diagnostic tools, supported by cloud-based virtualisation for connected digital car-as-a-service.',
        link: 'https://intive.com/work/automotive/cloud-and-backend-solutions',
        title: 'Cloud & Backend Solutions',
      },
      {
        image:
          'https://images.ctfassets.net/ue4ib83wzj4v/7D2YijcXIxdmc8aG7AgpJX/8de68156ca493e7845f69af06c1944fd/icon-automotive-infotainment-systems.svg',
        description:
          'Prototypes, mock-ups, 3D visualisations, and VR/AR interactions.',
        link: 'https://intive.com/work/automotive/hmi-and-infotainment',
        title: 'HMI & Infotainment Development Services',
      },
    ];
    render(<CategoryInfo categoryData={arrData} />);
    const title = screen.getByRole('heading', {
      name: arrData[0].title,
    });
    expect(title).toBeInTheDocument();
    const title1 = screen.getByRole('heading', {
      name: arrData[1].title,
    });
    expect(title1).toBeInTheDocument();
    const title2 = screen.getByRole('heading', {
      name: arrData[2].title,
    });
    expect(title2).toBeInTheDocument();
  });
});
