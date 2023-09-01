import React from 'react';
import {
  BrandDiv,
  BrandLogosDiv,
  WorkComponentBrandDescriptionP,
  WorkComponentBrandDiv,
  WorkComponentBrandLowerDiv,
  WorkComponentBrandTitleh1,
  WorkComponentBrandUpperDiv,
} from './WorkComponent.styled';

const WorkBrandLogos = () => {
  const brandLogos = [
    'https://images.ctfassets.net/ue4ib83wzj4v/mcgOKgXOztDoywQXUa3qy/a53d3c78ed321a33d19b2fefcf1f471b/audi.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/5cddWx162u9Gps4JeItcNI/60a4e7a24ba5d98eb73300f07100f948/discovery.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/5ZpudM7zd9TJkXS8RX8uFy/062c646b79f06e7a93e479ca15c9ce09/blackberry.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/70Vd4yn49GTCjGfjF4Oikk/86b12610d5fcaab11f764e46868c03ed/a_e.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/5HkrjfSKKoPD1GUHDx8MMj/39c7f1d6af8fd256bf1fe425d643c4e3/viacom.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/3JPUhoDJjftB2CCHmU6k6T/265e011636725662fb90aa3a83c632c4/bmw.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/7LUQF54gLDB0HkNyrNTvT8/827462dd629432cb36989e484e9f9ed7/facebook.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/4QsFFBCi4amx0FubdqCs4X/c01d673e7635c14d2d36ffadfc3f405c/google.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/4QsFFBCi4amx0FubdqCs4X/c01d673e7635c14d2d36ffadfc3f405c/google.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/16Gt64lKd4GSLExouzHReG/b3cdd583e13b6c0f0e3245b38df71e4a/ing.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/5uR1K4EpnASfhLTANAX0x9/9ceb270a9d7dde56f3c6fca825218bed/macmillan.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/4txh2O8lfaeNFxJJPAAlDC/aaa794cce4b7aed65e36220b41e716c3/netzsch.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/4txh2O8lfaeNFxJJPAAlDC/aaa794cce4b7aed65e36220b41e716c3/netzsch.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/1yjUSXhWIQqVg12yXm2FOp/46ab377fbe44045adee783abbbed68c0/brose.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/1XkaBYX8THABsqVYsTRgmc/d488e69f8a21d18af7f59a35ee6efe12/vorwerk.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/1tGoiATMH8X50kbdohjtcT/9daac1d721183acfa6800f7c463b8793/deichmann.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/3i0YqxEGoyWiEP6WF2Fwn6/5ec62b3f9ee992c8ca29294afd2cea12/basf.svg',
    'https://images.ctfassets.net/ue4ib83wzj4v/6i6bQrGDncU2F7TMv5sHcz/24dd5efd247fdc642501eb11bd7f140f/tandem.svg',
  ];
  return (
    <WorkComponentBrandDiv>
      <WorkComponentBrandUpperDiv>
        <WorkComponentBrandTitleh1>
          Our quest for digital excellence. It starts here.
        </WorkComponentBrandTitleh1>
        <WorkComponentBrandDescriptionP>
          As drivers of digital excitement, we contribute to the business
          transformation of our clients across a wide range of industries.
        </WorkComponentBrandDescriptionP>
      </WorkComponentBrandUpperDiv>
      <WorkComponentBrandLowerDiv>
        <BrandLogosDiv>
          {brandLogos.map((img, index: number) => (
            <BrandDiv key={index}>
              <img src={img}></img>
            </BrandDiv>
          ))}
        </BrandLogosDiv>
      </WorkComponentBrandLowerDiv>
    </WorkComponentBrandDiv>
  );
};

export default WorkBrandLogos;
