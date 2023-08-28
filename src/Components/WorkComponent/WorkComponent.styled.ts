import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { url } from "inspector";
import { styled } from "styled-components";


export const WorkComponentDiv = styled.div`
min-height: 110vh;
padding-top:14%;
padding-left:10%;
padding-right:10%;

`;

export const WorkTitleDiv = styled.div`
`;

export const WorkTitleH1 = styled.h1`
font-size: 2.5rem;
u{
    animation: colors 3s step-end 0s infinite forwards;
    background: linear-gradient(180deg,#fff,#fff 60%,#9fdaff 61%,#9fdaff 90%,#fff 0,#fff);
    text-decoration: none;
    @keyframes colors {
        
0% {
    background: linear-gradient(180deg,#fff,#fff 60%,#9fdaff 61%,#9fdaff 90%,#fff 0,#fff);
    }

35% {
    background: linear-gradient(180deg,#fff,#fff 60%,#faae83 61%,#faae83 90%,#fff 0,#fff);
}
70% {
    background: linear-gradient(180deg,#fff,#fff 60%,#f8a1c9 61%,#f8a1c9 90%,#fff 0,#fff);
}
100% {
    background: linear-gradient(180deg,#fff,#fff 60%,#9fdaff 61%,#9fdaff 90%,#fff 0,#fff);
} 
    }
}


`;
export const WorkTitleP = styled.p`
font-size: 1.7rem;
`;

export const WorkComponentSubDiv = styled.div`
display: flex;
flex-wrap: wrap;
gap:2%;
width: 70%;
height: 35vh;
margin-top: 5%;
`;
export const WorkDescriptionDiv = styled.div`
width: 53%;
font-weight: 300;
`;


export const FontAwesomeIconI = styled(FontAwesomeIcon)`
margin-left: 10px;
font-weight: 300;
font-size: 1rem;
color: #007ac9;

`;

export const WorkComponentBrandDiv = styled.div`
/* border: 2px solid red; */
height: 110vh;
background-color: hsla(0,0%,94%,.3);
padding: 10% 10%;
`;

export const WorkComponentBrandUpperDiv = styled.div`
width: 60%;

`;
export const WorkComponentBrandLowerDiv = styled.div`
`;
export const WorkComponentBrandTitleh1 = styled.h1`
font-size: 2.5rem;
`;
export const WorkComponentBrandDescriptionP = styled.p`
font-size: 1.4rem;
font-weight: 300;
`;
export const BrandLogosDiv = styled.div`
display :flex ;
columns: 4;
flex-wrap: wrap;
gap: 2.5%;

`;

export const BrandDiv = styled.div`
height: 200px;
width:170px;
display: flex;
justify-content: center;
align-items: center;
`;

export const InformationDiv = styled.div`
background-color: hsla(0,0%,94%,.3);
padding:5% 0%;
width: 100%;
height: 20vh;
`;

export const InformationInnerDiv = styled.div`
height: 100%;

`;
export const InformationOuterDiv = styled.div`

display: flex;
justify-content: space-around;
height: 100%;
`;
export const InformationInnerH1 = styled.h1`
font-size: 2.5rem;
`;
export const InformationInnerLink = styled(Link)`
color: #e21776;
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
transition: all .2s ease-in-out;
&:hover{
    border-bottom: 2px solid #e21776;
}
`;
interface StyledDivWithBackgroundProps {
    backgroundimage: string;
  }

export const BackgrondImageDiv = styled.div<StyledDivWithBackgroundProps>`
height: 70vh;
width: 100%;
background-image:${(props:any) => `url(${props.backgroundimage})`};
`;
export const SepratorHr = styled.hr`
background-color: #efefef;
height: 2px;
margin-top: 120px ;
margin-bottom: 120px ;
width: 100%;
`;

export const CategoryLink = styled(Link)`
text-decoration: none;
color: black;
border: 2px solid black;
height: 40px;
padding: 1% 2%;
font-weight: 700;
font-size: 1.4rem;
word-spacing: 1%;
&:hover{
  color: #007ac9 ;
}
`;
export const GotoWorkLink = styled(Link)`
text-decoration: none;
display: flex;
color: #777;
height: 40px;
margin-left: 10%;
margin-top: 5%;
font-weight: 700;
font-size: 1.4rem;
word-spacing: 1%;
&:hover{
  color: black ;
  gap: 1%;
  font-size: 1.5rem;
}
`;