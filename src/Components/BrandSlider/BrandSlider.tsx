import React from "react";
import { BrandImage } from "../OurCustomers/OurCustomers.styled";
import { UpdatedMarquee } from "./BrandSlider.styled";
import { graphql, useStaticQuery } from "gatsby";
import "resize-observer-polyfill/dist/ResizeObserver.global";

const BrandSlider = () => {
    const query = graphql`
    query {
      site {
        info: siteMetadata {
          brands: customerLogos
        }
      }
    }
  `;
    const {
        site: {
            info: { brands },
        },
    } = useStaticQuery(query);
    console.log(brands);
    return (
        <UpdatedMarquee autoFill speed={280}>
            {brands.map((image: string, index: number) => (
                <BrandImage key={index} src={image} alt="test" />
            ))}
        </UpdatedMarquee>
    );
};

export default BrandSlider;
