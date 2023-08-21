import React from 'react'
import { CategoryListDiv, CategoryListLeftDiv, CategoryInfoUpperP, CategoryInfoUpperH1, CategoryListRightDiv, CategoryListLeftImgDiv, } from '../Categoryinfo.styled'


interface CategoryListDivCompProps {
  image:string,
  title:string,
  description:string
}

const CategoryListDivComp = ({image,title,description}:CategoryListDivCompProps) => {
  return (
    <CategoryListDiv>
      <CategoryListLeftDiv>
        <CategoryListLeftImgDiv>
          <img src={image} alt="" />
        </CategoryListLeftImgDiv>
      </CategoryListLeftDiv>
      <CategoryListRightDiv>
        <CategoryInfoUpperH1>
          {title}
        </CategoryInfoUpperH1>
        <CategoryInfoUpperP>
          {description}
        </CategoryInfoUpperP>
      </CategoryListRightDiv>
    </CategoryListDiv>
  )
}

export default CategoryListDivComp
