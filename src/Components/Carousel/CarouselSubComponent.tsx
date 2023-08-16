import React from 'react'
import { CarouselBottomDiv, CarouselDiv, SeemoreButton } from './Carousel.styled'
import { GatsbyImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
interface CarouselSubComponentProps {
    image: IGatsbyImageData,
  }
  const contentStyle: React.CSSProperties = {
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
  };
const CarouselSubComponent = ({image}:CarouselSubComponentProps) => {
  return (
  <CarouselDiv>
    <GatsbyImage  image={image} alt="Carousel image" />
       <CarouselBottomDiv>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptate!
         <SeemoreButton>SEE</SeemoreButton>
 </CarouselBottomDiv>
 </CarouselDiv>
  )}
export default CarouselSubComponent;



