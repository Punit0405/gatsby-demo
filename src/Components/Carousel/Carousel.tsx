import React from 'react';
import { Carousel } from 'antd';
import CarouselSubComponent from './CarouselSubComponent';
import { CarouselBottomDiv, CarouselDiv, SeemoreButton } from './Carousel.styled';
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const query = graphql`
query CarouselDataQuery {
  allFile(filter: {sourceInstanceName: {eq: "images"}}) {
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
`

interface NodesType{
  childImageSharp:{
    gatsbyImageData:IGatsbyImageData
  },
  name:string,
  sourceInstanceName:string
}


const CarouselComponent = () => {
  const {allFile:{nodes}} = useStaticQuery(query);
  const newNodes:NodesType[] = nodes;
  newNodes.splice(3,2)
  return (
    <Carousel  effect="fade">
      { 
        newNodes.map((node:NodesType,index:number)=>{
        return  <CarouselSubComponent key={index} image={node.childImageSharp.gatsbyImageData}/>
       })
      
      }
   
       
      
      
       
  </Carousel>
  )
}

export default CarouselComponent;

