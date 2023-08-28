import React from "react";
import { BackgrondImageDiv, FontAwesomeIconI, SepratorHr, WorkComponentDiv, WorkComponentSubDiv, WorkDescriptionDiv, WorkTitleH1, WorkTitleP } from "./WorkComponent.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import DescriptionDiv from "./Resuable/DescriptionDiv";
import DescriptionDivWithoutColor from "./Resuable/DescriptionDivWithourColor";
import CategoryInfo from "./CategoryInfo";
import { Link } from "gatsby";

const WorkComponentForPage = (props:any) => {
    return (
        <WorkComponentDiv >
            <DescriptionDiv  mainTitle={props.mainTitle} mainDescription={props.mainDescription}/>
            <BackgrondImageDiv backgroundimage={props.imageLink} />
            <DescriptionDivWithoutColor  mainTitle={props.subSectionTitle} mainDescription={props.subSectionDescription}/>
            <SepratorHr/> 
            <CategoryInfo categoryData={props.categoryData}/>
        </WorkComponentDiv>
    );
};

export default WorkComponentForPage;
