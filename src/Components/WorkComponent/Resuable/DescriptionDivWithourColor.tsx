import React from 'react'
import { WorkDescriptionDiv, WorkTitleH1, WorkTitleP } from '../WorkComponent.styled'

interface DescriptionDivProps {
    mainTitle:string,
    mainDescription:string
}
const DescriptionDivWithoutColor = ({mainTitle
,mainDescription}:DescriptionDivProps) => {
  return (
    <WorkDescriptionDiv>
    <WorkTitleH1>
        {mainTitle}
    </WorkTitleH1>
    <WorkTitleP>
        {mainDescription}
    </WorkTitleP>
    </WorkDescriptionDiv>
  )
}

export default DescriptionDivWithoutColor;
