import React from 'react';
import {
  DescriptionP,
  IndustriesDiv,
  OurIndustriesContainerDiv,
  OurIndustriesDiv,
  OurIndustriesh2,
} from './OurIndustries.styled';
import IndustryComponent from './IndustryComponent';
import { graphql, useStaticQuery } from 'gatsby';

const OurIndustries = () => {
  const {
    categories: { nodes },
  } = useStaticQuery(graphql`
    query getWorkCategoriesQuery2 {
      categories: allContentfulWorkCategories(sort: { createdAt: ASC }) {
        nodes {
          id
          categoryName
          mainTitle
        }
      }
    }
  `);

  console.log(nodes, 'Data from woek cate');
  return (
    <OurIndustriesDiv>
      <OurIndustriesContainerDiv>
        <OurIndustriesh2>Our Industries</OurIndustriesh2>
        <div>
          <DescriptionP>
            Digital advisory, design, and custom software development services
            that are relevant to your sector. Check how we can help to propel
            innovation for your business
          </DescriptionP>
        </div>
        <IndustriesDiv>
          {nodes.map((industry: any) => (
            <IndustryComponent
              key={industry.id}
              categoryName={industry.categoryName}
              industry={industry.mainTitle}
            />
          ))}
        </IndustriesDiv>
      </OurIndustriesContainerDiv>
    </OurIndustriesDiv>
  );
};

export default OurIndustries;
