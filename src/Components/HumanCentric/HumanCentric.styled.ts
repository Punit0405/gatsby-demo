import { styled } from "styled-components";
import { CenterDiv } from "../../helperComponents";


const HumanCentricDiv = styled.div`
p{
    margin: 0% 0%;
}
background-color:rgb(25, 24, 70);
display: flex;
justify-content: space-around;
font-family: 'Lato', sans-serif;
color: #fff;
padding: 5% 2%;
`;

export const HumanMainContainer = styled.div`
display: flex;
`;
const HumanCentricLeftDiv = styled(CenterDiv)`
flex-direction: column;
align-items: flex-start;
font-size: 1.5rem;
padding: 10% 9.5%;
`;
const HumanCentricLeftUpperDiv = styled(CenterDiv)`
p{
    font-size: 2.8rem;
    margin-bottom: 10%;
}
align-items: flex-start;
text-align: left;
`;
const HumanCentricLeftBottomDiv = styled(CenterDiv)`
text-align: left;
font-weight: 200;
 

`;
export const HumanCentricRightUpperDiv = styled(CenterDiv)`
justify-content: space-between;
`;
export const HumanCentricRightBottomDiv = styled(CenterDiv)`
justify-content: space-between;

`;
const HumanCentricRightDiv = styled.div`
display: flex;
justify-content: flex-start;
padding:5% 5%;
min-width: 40rem;
min-height: 40rem;
`;

export const RightColorfulDiv = styled(CenterDiv)`
display: flex;
flex-direction: column;
border: 5px solid green;
min-height: 40rem;
min-width: 40rem;
border-color: #f8a1c9 #f8a1c9 #9fdaff #9fdaff;

`;
export const HumanNumberDiv = styled(CenterDiv)`
flex-direction: column;
gap:8%;
padding:5% 5%;
font-size:1rem;
text-align: left;
height: 200px;
width: 200px;
`;
export const WhiteBorderDiv = styled.div`
border: 1px solid white;
height: 100px;
`;

export const NumberP = styled.p`
font-size: 2.5rem;
font-weight: 700;
margin: 0% 0%;
`;
export {HumanCentricDiv,HumanCentricLeftDiv,HumanCentricRightDiv,HumanCentricLeftBottomDiv,HumanCentricLeftUpperDiv};