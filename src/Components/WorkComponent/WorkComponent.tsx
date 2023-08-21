import React from 'react'
import { FontAwesomeIconI, WorkCategoryDiv, WorkComponentDiv, WorkComponentSubDiv, WorkDescriptionDiv, WorkTitleH1, WorkTitleP } from './WorkComponent.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import DescriptionDiv from './Resuable/DescriptionDiv'

const WorkComponent = () => {
    const industries = [
        "AUTOMOTIVE",
        "ECOMMERCE,RETAIL & CONSUMER PRODUCTS",
        "ENERGY & UTILITIES",
        "FINTECH",
        "INDUSTRIAL",
        "LIFE SCIENCES",
        "TECHNOLOGY,MEDIA & COMMUNICATOINS",
        "TELECOMMUNICATIONS",
        "TRANSPOTATION"
    ]
  return (
   <WorkComponentDiv>
    <DescriptionDiv mainTitle='Work' mainDescription='With over 20 years of experience working with market-leading companies, we know what it takes to create tailor-made solutions that exceed expectations and create excitement and delight for our customers. Digital enthusiasm is at our core.'/>
    <WorkComponentSubDiv>
        {
            industries.map(industry=>(
                <WorkCategoryDiv>
                {industry}
                <FontAwesomeIconI icon={faArrowRightLong}></FontAwesomeIconI>
             </WorkCategoryDiv>  
            ))
        }
    </WorkComponentSubDiv>
    
   </WorkComponentDiv>
  )
}

export default WorkComponent
