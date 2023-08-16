import React from 'react'
import Header from '../Components/Header/Header'
import CarouselComponent from '../Components/Carousel/Carousel'
import OurCustomers from '../Components/OurCustomers/OurCustomers'
import HumanCentricComponent from '../Components/HumanCentric/HumanCentricComponent'
import OurIndustries from '../Components/OurIndustries/OurIndustries'
import { Link, graphql } from 'gatsby'
import "../styles/global.css"
import OurCulture from '../Components/OurCulture/OurCulture'
import OurOffices from '../Components/OurOffices/OurOffices'
import Footer from '../Components/Footer/Footer'
import Layout from '../Components/Layout'


const index = ({data}:any) => {
    return (
      <Layout>
        <CarouselComponent/>
        <OurCustomers/>
        <HumanCentricComponent/>
        <OurIndustries/>
        <OurCulture/>
        <OurOffices/>
      </Layout>
    )
  
}

export const data = graphql`
query  {
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
