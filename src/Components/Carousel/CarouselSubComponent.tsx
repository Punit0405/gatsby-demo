import React from "react";
import {
    CarouselBottomDiv,
    CarouselDiv,
    SeemoreButton,
} from "./Carousel.styled";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
interface CarouselSubComponentProps {
  image: IGatsbyImageData;
}

const CarouselSubComponent = ({ image }: CarouselSubComponentProps) => {
    return (
        <CarouselDiv>
            <GatsbyImage image={image} alt="Carousel image" />
            <CarouselBottomDiv>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
        voluptate!
                <SeemoreButton>SEE</SeemoreButton>
            </CarouselBottomDiv>
        </CarouselDiv>
    );
};
export default CarouselSubComponent;
