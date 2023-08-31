import React from "react";
import CarouselSubComponent from "./CarouselSubComponent";
import { CarouselAntd } from "./Carousel.styled";
import { IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query CarouselDataQuery {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        sourceInstanceName
      }
      totalCount
    }
  }
`;

interface NodesType {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
  name: string;
  sourceInstanceName: string;
}

const CarouselComponent = () => {
    const {
        allFile: { nodes },
    } = useStaticQuery(query);
    const newNodes: NodesType[] = nodes;
    // newNodes.splice(3,2)
    return (
        <CarouselAntd autoplay autoplaySpeed={3000} effect="fade">
            {newNodes.map((node: any, index: number) => {
                const image: any = getImage(node);
                return <CarouselSubComponent key={index} image={image} />;
            })}
        </CarouselAntd>
    );
};

export default CarouselComponent;
