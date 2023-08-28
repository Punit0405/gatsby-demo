import { Link } from "gatsby";
import { styled } from "styled-components";
export const OurIndustriesDiv = styled.div`
width: 100%;
p{
    margin: 0% 0%;
}
color: #fff;
background-color:rgb(25, 24, 70);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const OurIndustriesh2 = styled.h1`
color: #fff;
align-self: center;
text-align: center;
scale: 1.3;
`;

export const DescriptionP = styled.p`
font-size: 1.6rem;
font-weight: 300;
`;
export const OurIndustriesContainerDiv = styled.div`
padding: 0% 11%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const IndustriesDiv = styled.div`
display: flex;
margin-top: 4%;
flex-wrap: wrap;
justify-content: space-around;
padding: 0% 10%;
`;

export const LinkComponent = styled(Link)`
text-decoration: none;
color: #fff;
border: 1px solid #fff;
padding: 1% 1%;
border-radius:40px;
font-size:1.7rem;
scale: 110%;
font-weight: 500;
margin-bottom: 20px;
font-family: 'Lato', sans-serif;
span{
    padding-right: 20px;
  
}
`;