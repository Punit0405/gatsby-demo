import React from 'react'
import { OurOfficesContentDiv, OurOfficesContentH1, OurOfficesContentp, OurOfficesDiv, OurOfficesLink, OurOfficesTextDiv } from './OurOffices.styled'

const OurOffices = () => {
  return (
     <OurOfficesDiv>
        <OurOfficesContentDiv>
            <OurOfficesTextDiv>
                <OurOfficesContentH1>A global company</OurOfficesContentH1>
            <OurOfficesContentp>intive transcends borders, with over 3,000 team members and 37 nationalities, spread across 3 continents.</OurOfficesContentp>
            </OurOfficesTextDiv>
            <OurOfficesLink to='https://www.google.com/maps/d/u/0/viewer?mid=1yE_Sbd3OGhJZ65oK0iauHKtCccb2R6E&ll=48.77876912370807%2C31.976802591943155&z=3' target="_blank ">OUR OFFICES</OurOfficesLink>
        </OurOfficesContentDiv>

     </OurOfficesDiv>
  )
}

export default OurOffices
