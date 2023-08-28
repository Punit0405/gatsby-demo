import React from "react";
import { CategoryLink, FontAwesomeIconI, WorkComponentDiv, WorkComponentSubDiv } from "./WorkComponent.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import DescriptionDiv from "./Resuable/DescriptionDiv";
import { Link, graphql, useStaticQuery } from "gatsby";
import slugify from "slugify";


const WorkComponent = () => {
    const {categories:{nodes}} = useStaticQuery(graphql`
    query getWorkCategoriesQuery {
        categories:allContentfulWorkCategories(sort: {createdAt: ASC}) {
          nodes {
            id
            categoryName
            mainTitle
            
          }
        }
      }
    `);

    console.log(nodes ,"Data from woek cate");
    return (
        <WorkComponentDiv>
            <DescriptionDiv mainTitle='Work' mainDescription='With over 20 years of experience working with market-leading companies, we know what it takes to create tailor-made solutions that exceed expectations and create excitement and delight for our customers. Digital enthusiasm is at our core.'/>
            <WorkComponentSubDiv>
                {
                    nodes.map((industry:any)=>(
                        <CategoryLink to={`/work/${slugify(industry.categoryName,{
                            lower: true,
                        })}`} key={industry.id}>
                            {industry.mainTitle}
                            <FontAwesomeIconI icon={faArrowRightLong}></FontAwesomeIconI>
                        </CategoryLink>
                    ))
                }
            </WorkComponentSubDiv>
    
        </WorkComponentDiv>
    );
};

export default WorkComponent;
