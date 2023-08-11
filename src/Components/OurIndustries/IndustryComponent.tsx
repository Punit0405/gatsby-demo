import React from 'react'
import { LinkComponent } from './OurIndustries.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
interface IndustryComponent{
  industry:string
}

const IndustryComponent = ({industry}:IndustryComponent) => {
  return (
    <>
     <LinkComponent href={`/work/${industry.toLowerCase()}`}>
     <span> {industry}</span>
     <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
     </LinkComponent>
     </>
  )
}

export default IndustryComponent
