import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";


export const WorkComponentDiv = styled.div`
height: 110vh;
width: 100%;
padding-top:14%;
padding-left:10%;
`

export const WorkTitleDiv = styled.div`
`

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


`
export const WorkTitleP = styled.p`
font-size: 1.7rem;
`
export const WorkComponentSubDiv = styled.div`
display: flex;
flex-wrap: wrap;
gap:2%;
width: 70%;
height: 29%;
margin-top: 5%;
`
export const WorkDescriptionDiv = styled.div`
width: 53%;
font-weight: 300;
`
export const WorkCategoryDiv = styled.div`
border: 2px solid black;
height: 40px;
padding: 1% 2%;
font-weight: 700;
font-size: 1.4rem;
word-spacing: 1%;
&:hover{
  color: #007ac9 ;
}

`

export const FontAwesomeIconI = styled(FontAwesomeIcon)`
margin-left: 10px;
font-weight: 300;
font-size: 1rem;
color: #007ac9;

`