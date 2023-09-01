import React from 'react';
import {
  CarouselBottomDiv,
  CarouselDiv,
  SeemoreButton,
} from './Carousel.styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
interface CarouselSubComponentProps {
  image: IGatsbyImageData;
  index: number;
}

const CarouselSubComponent = ({ image, index }: CarouselSubComponentProps) => {
  return (
    <CarouselDiv>
      <GatsbyImage data-testid={`test-${index}`} image={image} alt="" />
      <CarouselBottomDiv>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        voluptate!
        <SeemoreButton>SEE</SeemoreButton>
      </CarouselBottomDiv>
    </CarouselDiv>
  );
};
export default CarouselSubComponent;
