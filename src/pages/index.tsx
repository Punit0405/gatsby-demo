import React from 'react'
import Header from '../Components/Header/Header'
import CarouselComponent from '../Components/Carousel/Carousel'
import OurCustomers from '../Components/OurCustomers/OurCustomers'
import HumanCentricComponent from '../Components/HumanCentric/HumanCentricComponent'
import OurIndustries from '../Components/OurIndustries/OurIndustries'
import { Link } from 'gatsby'
import "../styles/global.css"


const index = () => {
    return (
      <div>
        <Header links={['INDUSTRIES','SERVICES','INSIGHTS','ABOUT','CAREERS','CONTACT']}/>
        <CarouselComponent/>
        <OurCustomers/>
        <HumanCentricComponent/>
        <OurIndustries/>
      </div>
    )
  
}

export default index
