import React from 'react'
import { CategoryInfoDiv, CategoryInfoLowerDiv, CategoryInfoSubDiv, CategoryInfoUpperDiv, CategoryInfoUpperH1, CategoryInfoUpperP, CategoryListDiv, CategoryListLeftDiv, CategoryListLeftImgDiv, CategoryListRightDiv } from './Categoryinfo.styled'
import CategoryListDivComp from './Resuable/CategoryListDivComp'

const CategoryInfo = (props:any) => {
  return (
    <CategoryInfoDiv>
        <CategoryInfoSubDiv>
            <CategoryInfoUpperDiv>
             <CategoryInfoUpperH1>
             Open up new exciting opportunities
             </CategoryInfoUpperH1>
            </CategoryInfoUpperDiv>
            <CategoryInfoLowerDiv>
                {
                    props.categoryData.map((data:any)=>(
                        <CategoryListDivComp 
                        key={data.image}
                        image={data.image}
                        title={data.title}
                        description={data.description}
                        />
                    ))
                }
           
            </CategoryInfoLowerDiv>
        </CategoryInfoSubDiv>
    </CategoryInfoDiv>
  )
}

export default CategoryInfo
