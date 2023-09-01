import React from 'react';
import {
  BackgrondImageDiv,
  SepratorHr,
  WorkComponentDiv,
} from './WorkComponent.styled';
import DescriptionDiv from './Resuable/DescriptionDiv';
import DescriptionDivWithoutColor from './Resuable/DescriptionDivWithourColor';
import CategoryInfo from './CategoryInfo';

const WorkComponentForPage = (props: any) => {
  return (
    <WorkComponentDiv>
      <DescriptionDiv
        mainTitle={props.mainTitle}
        mainDescription={props.mainDescription}
      />
      <BackgrondImageDiv backgroundimage={props.imageLink} />
      <DescriptionDivWithoutColor
        mainTitle={props.subSectionTitle}
        mainDescription={props.subSectionDescription}
      />
      <SepratorHr />
      <CategoryInfo categoryData={props.categoryData} />
    </WorkComponentDiv>
  );
};

export default WorkComponentForPage;
