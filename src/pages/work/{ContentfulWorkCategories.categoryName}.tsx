import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../Components/Layout'
import InformatitonSection from '../../Components/WorkComponent/InformatitonSection'
import WorkComponentForPage from '../../Components/WorkComponent/WorkComponentForPage'
import { GotoWorkLink } from '../../Components/WorkComponent/WorkComponent.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const WorkComponentContentful = ({data}:any) => {
  console.log(data , "Data")
    const {categoryData:{mainTitle,mainDescription,subSectionTitle,imageLink,subSectionDescription,categoryData}} = data;
    const mainDescriptionData = JSON.parse(mainDescription.raw);
    const subSectionDescriptionData = JSON.parse(subSectionDescription.raw);
    const mainDescriptionParsed = mainDescriptionData.content[0].content[0].value;    
    const subSectionDescriptionParsed = subSectionDescriptionData.content[0].content[0].value;    
   console.log(categoryData , "Category Data")
  return (
    <Layout>
        <GotoWorkLink to="/work"><FontAwesomeIcon icon={faArrowLeft} />WORK</GotoWorkLink>
        <WorkComponentForPage 
         mainTitle={mainTitle}
         mainDescription={mainDescriptionParsed} 
         imageLink={imageLink}
         subSectionTitle={subSectionTitle}
         subSectionDescription={subSectionDescriptionParsed}
         categoryData={categoryData}
          />   
    </Layout>
  )
}

export const data = graphql`
query QueryForCategory($categoryName:String) {
  categoryData:contentfulWorkCategories(categoryName: {eq: $categoryName}) {
    categoryName
    categoryInfoTitle
    mainTitle
    imageLink
    subSectionTitle
    mainDescription {
      raw
    }
    subSectionDescription {
      raw
    }
    categoryData:childrenContentfulWorkCategoriesCategoryInfoDataJsonNode {
      image
      description
      link
      title
    }
  }
}
`


export default WorkComponentContentful
