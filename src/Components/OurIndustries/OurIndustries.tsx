import React from 'react'
import { DescriptionP, IndustriesDiv, LinkComponent, OurIndustriesContainerDiv, OurIndustriesDiv, OurIndustriesh2 } from './OurIndustries.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import IndustryComponent from './IndustryComponent'

const OurIndustries = () => {
    const industries = [
        "AUTOMOTIVE",
        "TECHNOLOGY,MEDIA & COMMUNICATOINS",
        "ENERGY & UTILITIES",
        "FINTECH",
        "INDUSTRIAL",
        "LIFE SCIENCES",
        "ECOMMERCE,RETAIL & CONSUMER PRODUCTS",
        "TELECOMMUNICATIONS",
        "TRANSPOTATION"
    ]
  return (
    <OurIndustriesDiv>
     <OurIndustriesContainerDiv>
   
    <OurIndustriesh2>Our Industries</OurIndustriesh2>
    <div>
    <DescriptionP>
    Digital advisory, design, and custom software development services that are relevant to your sector. Check how we can help to propel innovation for your business
    </DescriptionP>
    </div>
    <IndustriesDiv>
    {
     industries.map((industry:string,index:number)=>
     (
        <IndustryComponent key={index} industry={industry}/>
     )
     )
     }
    </IndustriesDiv>
    </OurIndustriesContainerDiv>
    </OurIndustriesDiv>
  )
}

export default OurIndustries
