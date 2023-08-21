import React from 'react'
import Layout from '../../Components/Layout'
import InformatitonSection from '../../Components/WorkComponent/InformatitonSection'
import WorkComponentForPage from '../../Components/WorkComponent/WorkComponentForPage'

const WorkPage = () => {
  return (
    <Layout>
        <WorkComponentForPage/>   
        <InformatitonSection/>   
    </Layout>
  )
}

export default WorkPage;
