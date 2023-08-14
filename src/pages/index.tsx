import React from 'react'
import Header from '../Components/Header/Header'
import CarouselComponent from '../Components/Carousel/Carousel'
import OurCustomers from '../Components/OurCustomers/OurCustomers'
import HumanCentricComponent from '../Components/HumanCentric/HumanCentricComponent'
import OurIndustries from '../Components/OurIndustries/OurIndustries'
import { Link, graphql } from 'gatsby'
import "../styles/global.css"


const index = ({data}:any) => {
  const {nav:{links}} = data
    return (
      <div>
        <Header links={links}/>
        <CarouselComponent/>
        <OurCustomers/>
        <HumanCentricComponent/>
        <OurIndustries/>
      </div>
    )
  
}

export const data = graphql`
query MyQuery {
 nav: allContentfulNavigation(sort: {createdAt: ASC}) {
   links: nodes {
      id
      link
      title
    }
  }
}
`

export default index
