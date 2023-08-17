import React from 'react'
import Layout from '../../Components/Layout'
import WorkComponent from '../../Components/WorkComponent/WorkComponent'
import WorkBrandLogos from '../../Components/WorkComponent/WorkBrandLogos'
import InformatitonSection from '../../Components/WorkComponent/InformatitonSection'

const WorkPage = () => {
  return (
    <Layout>
        <WorkComponent/>   
        <WorkBrandLogos/>   
        <InformatitonSection/>   
    </Layout>
  )
}

export default WorkPage;
